import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { RequirementItem } from "./requirement-item";

const statusColor: Record<string, string> = {
  CONFIRMED: "bg-[#E3F9ED] text-[#067647] hover:bg-[#E3F9ED]",
  PENDING: "bg-[#FFF6DC] text-[#8A6100] hover:bg-[#FFF6DC]",
  REJECTED: "bg-[#FDE2E5] text-[#A6161A] hover:bg-[#FDE2E5]",
};

export default async function RequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const request = await db.eventRequest.findUnique({
    where: { id },
    include: {
      club: { include: { facultyInCharge: true } },
      venue: true,
      requirements: { include: { docRule: true, signedBy: true } },
    },
  });

  if (!request) notFound();

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-[28px] font-semibold text-[#0A2540] tracking-tight">{request.eventName}</h1>
          <p className="text-sm text-[#6B7C93] mt-1">{request.club.name} · Faculty in-charge: {request.club.facultyInCharge.name}</p>
        </div>
        <Badge className={statusColor[request.status]}>{request.status}</Badge>
      </div>

      <div className="border border-[#E3E8EE] rounded-lg divide-y divide-[#E3E8EE] bg-white shadow-sm mb-6 overflow-hidden">
        <div className="px-5 py-3.5 flex justify-between text-sm">
          <span className="text-[#6B7C93]">Venue</span>
          <span className="text-[#0A2540] font-medium">{request.venue.name}</span>
        </div>
        <div className="px-5 py-3.5 flex justify-between text-sm">
          <span className="text-[#6B7C93]">When</span>
          <span className="text-[#0A2540] font-medium">
            {new Date(request.startTime).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })} – {new Date(request.endTime).toLocaleTimeString([], { timeStyle: "short" })}
          </span>
        </div>
        <div className="px-5 py-3.5 flex justify-between text-sm">
          <span className="text-[#6B7C93]">Footfall</span>
          <span className="text-[#0A2540] font-medium">{request.footfall}</span>
        </div>
        <div className="px-5 py-3.5 flex justify-between text-sm">
          <span className="text-[#6B7C93]">External Guest</span>
          <span className="text-[#0A2540] font-medium">{request.hasExternalGuest ? "Yes" : "No"}</span>
        </div>
        <div className="px-5 py-3.5 flex justify-between text-sm">
          <span className="text-[#6B7C93]">Equipment</span>
          <span className="text-[#0A2540] font-medium">{request.equipment.length ? request.equipment.join(", ") : "None"}</span>
        </div>
      </div>

      <h2 className="text-[13px] font-semibold text-[#0A2540] mb-3">Requirements</h2>
      <div className="border border-[#E3E8EE] rounded-lg divide-y divide-[#E3E8EE] bg-white shadow-sm overflow-hidden">
        {request.requirements.length === 0 && (
          <p className="text-sm text-[#6B7C93] px-5 py-8 text-center">No documents required for this event.</p>
        )}
        {request.requirements.map((req) => (
          <RequirementItem key={req.id} req={req} />
        ))}
      </div>
    </div>
  );
}

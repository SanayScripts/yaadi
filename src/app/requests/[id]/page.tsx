import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { RequirementItem } from "./requirement-item";

const statusColor: Record<string, string> = {
  CONFIRMED: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  PENDING: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
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
    <div className="max-w-2xl mx-auto py-10 px-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">{request.eventName}</h1>
          <p className="text-sm text-neutral-500 mt-1">{request.club.name} · Faculty in-charge: {request.club.facultyInCharge.name}</p>
        </div>
        <Badge className={statusColor[request.status]}>{request.status}</Badge>
      </div>

      <div className="border border-neutral-200 rounded-lg divide-y divide-neutral-100 bg-white mb-6">
        <div className="px-4 py-3 flex justify-between text-sm">
          <span className="text-neutral-500">Venue</span>
          <span className="text-neutral-900 font-medium">{request.venue.name}</span>
        </div>
        <div className="px-4 py-3 flex justify-between text-sm">
          <span className="text-neutral-500">When</span>
          <span className="text-neutral-900 font-medium">
            {new Date(request.startTime).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })} – {new Date(request.endTime).toLocaleTimeString([], { timeStyle: "short" })}
          </span>
        </div>
        <div className="px-4 py-3 flex justify-between text-sm">
          <span className="text-neutral-500">Footfall</span>
          <span className="text-neutral-900 font-medium">{request.footfall}</span>
        </div>
        <div className="px-4 py-3 flex justify-between text-sm">
          <span className="text-neutral-500">External Guest</span>
          <span className="text-neutral-900 font-medium">{request.hasExternalGuest ? "Yes" : "No"}</span>
        </div>
        <div className="px-4 py-3 flex justify-between text-sm">
          <span className="text-neutral-500">Equipment</span>
          <span className="text-neutral-900 font-medium">{request.equipment.length ? request.equipment.join(", ") : "None"}</span>
        </div>
      </div>

      <h2 className="text-sm font-semibold text-neutral-900 mb-3">Requirements</h2>
      <div className="border border-neutral-200 rounded-lg divide-y divide-neutral-100 bg-white">
        {request.requirements.length === 0 && (
          <p className="text-sm text-neutral-500 px-4 py-6 text-center">No documents required for this event.</p>
        )}
        {request.requirements.map((req) => (
          <RequirementItem key={req.id} req={req} />
        ))}
      </div>
    </div>
  );
}

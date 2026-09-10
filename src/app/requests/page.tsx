import { db } from "@/lib/db";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const statusColor: Record<string, string> = {
  CONFIRMED: "bg-[#E3F9ED] text-[#067647] hover:bg-[#E3F9ED]",
  PENDING: "bg-[#FFF6DC] text-[#8A6100] hover:bg-[#FFF6DC]",
  REJECTED: "bg-[#FDE2E5] text-[#A6161A] hover:bg-[#FDE2E5]",
};

export default async function RequestsPage() {
  const requests = await db.eventRequest.findMany({
    include: { club: true, venue: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] font-semibold text-[#0A2540] tracking-tight">Event Requests</h1>
          <p className="text-sm text-[#6B7C93] mt-1">All bookings across clubs and venues.</p>
        </div>
      </div>

      <div className="border border-[#E3E8EE] rounded-lg divide-y divide-[#E3E8EE] bg-white shadow-sm overflow-hidden">
        {requests.length === 0 && (
          <p className="text-sm text-[#6B7C93] px-4 py-10 text-center">No requests yet.</p>
        )}
        {requests.map((r) => (
          <Link
            key={r.id}
            href={`/requests/${r.id}`}
            className="flex items-center justify-between px-5 py-4 hover:bg-[#F6F9FC] transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-[#0A2540]">{r.eventName}</p>
              <p className="text-xs text-[#6B7C93] mt-0.5">
                {r.club.name} · {r.venue.name} · {new Date(r.startTime).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}
              </p>
            </div>
            <Badge className={statusColor[r.status]}>{r.status}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}

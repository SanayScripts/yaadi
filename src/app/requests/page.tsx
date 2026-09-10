import { db } from "@/lib/db";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const statusColor: Record<string, string> = {
  CONFIRMED: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  PENDING: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
};

export default async function RequestsPage() {
  const requests = await db.eventRequest.findMany({
    include: { club: true, venue: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">Event Requests</h1>
          <p className="text-sm text-neutral-500">All bookings across clubs and venues.</p>
        </div>
        <Link href="/requests/new">
          <Button className="bg-indigo-600 hover:bg-indigo-700">New Request</Button>
        </Link>
      </div>

      <div className="border border-neutral-200 rounded-lg divide-y divide-neutral-100 bg-white">
        {requests.length === 0 && (
          <p className="text-sm text-neutral-500 px-4 py-8 text-center">No requests yet.</p>
        )}
        {requests.map((r) => (
          <Link
            key={r.id}
            href={`/requests/${r.id}`}
            className="flex items-center justify-between px-4 py-3.5 hover:bg-neutral-50 transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-neutral-900">{r.eventName}</p>
              <p className="text-xs text-neutral-500 mt-0.5">
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

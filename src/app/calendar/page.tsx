import { db } from "@/lib/db";
import { CalendarView } from "./calendar-view";

export default async function CalendarPage() {
  const [requests, venues] = await Promise.all([
    db.eventRequest.findMany({
      include: { club: true, venue: true },
      orderBy: { startTime: "asc" },
    }),
    db.venue.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900">Master Calendar</h1>
        <p className="text-sm text-neutral-500">All bookings across every venue, read-only.</p>
      </div>
      <CalendarView
        requests={requests.map((r) => ({
          id: r.id,
          eventName: r.eventName,
          club: r.club.name,
          venue: r.venue.name,
          venueId: r.venueId,
          status: r.status,
          startTime: r.startTime.toISOString(),
          endTime: r.endTime.toISOString(),
        }))}
        venues={venues}
      />
    </div>
  );
}

import { db } from "@/lib/db";

export async function findClashes(venueId: string, start: Date, end: Date, excludeRequestId?: string) {
  return db.eventRequest.findMany({
    where: {
      venueId,
      id: excludeRequestId ? { not: excludeRequestId } : undefined,
      status: { not: "REJECTED" },
      startTime: { lt: end },
      endTime: { gt: start },
    },
    include: { club: true },
  });
}

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const venueId = req.nextUrl.searchParams.get("venueId");
  const start = req.nextUrl.searchParams.get("start");
  const end = req.nextUrl.searchParams.get("end");
  if (!venueId || !start || !end) return NextResponse.json([]);

  const bookings = await db.eventRequest.findMany({
    where: {
      venueId,
      status: { not: "REJECTED" },
      startTime: { lt: new Date(end) },
      endTime: { gt: new Date(start) },
    },
    include: { club: true },
  });

  return NextResponse.json(
    bookings.map((b) => ({
      id: b.id,
      eventName: b.eventName,
      club: b.club.name,
      startTime: b.startTime,
      endTime: b.endTime,
    }))
  );
}

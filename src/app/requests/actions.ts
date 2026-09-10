"use server";

import { db } from "@/lib/db";
import { findClashes } from "@/lib/clash";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEventRequest(formData: FormData) {
  const clubId = formData.get("clubId") as string;
  const eventName = formData.get("eventName") as string;
  const venueId = formData.get("venueId") as string;
  const startTime = new Date(formData.get("startTime") as string);
  const endTime = new Date(formData.get("endTime") as string);
  const footfall = parseInt(formData.get("footfall") as string, 10) || 0;
  const hasExternalGuest = formData.get("hasExternalGuest") === "on";
  const equipmentRaw = (formData.get("equipment") as string) || "";
  const equipment = equipmentRaw.split(",").map((e) => e.trim()).filter(Boolean);

  const venue = await db.venue.findUniqueOrThrow({ where: { id: venueId } });

  const clashes = await findClashes(venueId, startTime, endTime);

  if (venue.type === "AUDI" && clashes.length > 0) {
    return { error: `Clash with "${clashes[0].eventName}" (${clashes[0].club.name}) in this slot.` };
  }

  const status = venue.type === "AUDI" ? "CONFIRMED" : "PENDING";

  const request = await db.eventRequest.create({
    data: {
      clubId,
      eventName,
      venueId,
      startTime,
      endTime,
      footfall,
      hasExternalGuest,
      equipment,
      status,
    },
  });

  // Batch 2 will populate requirements here via a shared rule-evaluation function.

  revalidatePath("/requests");
  redirect(`/requests/${request.id}`);
}

export async function getClashesForSlot(venueId: string, startTime: string, endTime: string) {
  if (!venueId || !startTime || !endTime) return [];
  const clashes = await findClashes(venueId, new Date(startTime), new Date(endTime));
  return clashes.map((c) => ({ id: c.id, eventName: c.eventName, club: c.club.name }));
}

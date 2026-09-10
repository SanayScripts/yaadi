"use server";

import { db } from "@/lib/db";
import { setSessionCookie } from "@/lib/session";
import { redirect } from "next/navigation";

export async function signupAsClub(formData: FormData) {
  const clubId = formData.get("clubId") as string;
  const name = ((formData.get("name") as string) || "").trim();

  const club = await db.club.findUniqueOrThrow({ where: { id: clubId } });
  await setSessionCookie({ role: "CLUB", id: club.id, name: name || club.name });
  redirect("/requests");
}

"use server";

import { db } from "@/lib/db";
import { MOCK_EMAILS } from "@/lib/mock-accounts";
import { setSessionCookie, clearSessionCookie } from "@/lib/session";
import { redirect } from "next/navigation";

async function resolveAccountByEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  const entry = Object.entries(MOCK_EMAILS).find(([, e]) => e === normalized);
  if (!entry) return null;
  const [name] = entry;

  const club = await db.club.findFirst({ where: { name } });
  if (club) return { role: "CLUB" as const, id: club.id, name: club.name };

  const faculty = await db.faculty.findFirst({ where: { name } });
  if (faculty) return { role: faculty.role as "FACULTY" | "PRINCIPAL", id: faculty.id, name: faculty.name };

  return null;
}

export async function loginWithEmail(formData: FormData) {
  const email = (formData.get("email") as string) || "";
  const account = await resolveAccountByEmail(email);

  if (!account) {
    redirect("/login?error=1");
  }

  await setSessionCookie(account);
  redirect(account.role === "CLUB" ? "/requests" : "/approvals");
}

export async function loginAsProfile(role: "CLUB" | "FACULTY" | "PRINCIPAL", id: string, name: string) {
  "use server";
  await setSessionCookie({ role, id, name });
  redirect(role === "CLUB" ? "/requests" : "/approvals");
}

export async function logout() {
  await clearSessionCookie();
  redirect("/login");
}

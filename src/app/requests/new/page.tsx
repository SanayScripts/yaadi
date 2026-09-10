import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { NewRequestForm } from "./form";

export default async function NewRequestPage() {
  const [clubs, venues, docRules, session] = await Promise.all([
    db.club.findMany({ orderBy: { name: "asc" } }),
    db.venue.findMany({ orderBy: { name: "asc" } }),
    db.docRule.findMany(),
    getSession(),
  ]);

  const lockedClub = session?.role === "CLUB" ? { id: session.id, name: session.name } : null;

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-semibold text-neutral-900 mb-1">New Event Request</h1>
      <p className="text-sm text-neutral-500 mb-8">Auditoriums auto-confirm if the slot is free. Other venues need manual confirmation.</p>
      <NewRequestForm clubs={clubs} venues={venues} docRules={docRules} lockedClub={lockedClub} />
    </div>
  );
}

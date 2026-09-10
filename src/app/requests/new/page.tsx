import { db } from "@/lib/db";
import { NewRequestForm } from "./form";

export default async function NewRequestPage() {
  const [clubs, venues, docRules] = await Promise.all([
    db.club.findMany({ orderBy: { name: "asc" } }),
    db.venue.findMany({ orderBy: { name: "asc" } }),
    db.docRule.findMany(),
  ]);

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-semibold text-neutral-900 mb-1">New Event Request</h1>
      <p className="text-sm text-neutral-500 mb-8">Auditoriums auto-confirm if the slot is free. Other venues need manual confirmation.</p>
      <NewRequestForm clubs={clubs} venues={venues} docRules={docRules} />
    </div>
  );
}

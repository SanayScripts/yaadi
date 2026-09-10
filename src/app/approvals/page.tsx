import { db } from "@/lib/db";
import { ApprovalsView } from "./approvals-view";

export default async function ApprovalsPage() {
  const [faculty, pendingRequirements] = await Promise.all([
    db.faculty.findMany({ orderBy: { name: "asc" } }),
    db.requestRequirement.findMany({
      where: { status: "PENDING", docRule: { kind: "SIGNATURE" } },
      include: {
        docRule: true,
        eventRequest: { include: { club: { include: { facultyInCharge: true } }, venue: true } },
      },
      orderBy: { updatedAt: "asc" },
    }),
  ]);

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900">Approvals</h1>
        <p className="text-sm text-neutral-500">Digitally forwarded sign-off requests. Approve/reject click stands in for the real signature — that piece is roadmap.</p>
      </div>
      <ApprovalsView
        faculty={faculty}
        requirements={pendingRequirements.map((r) => ({
          id: r.id,
          label: r.docRule.label,
          signerRole: r.docRule.signerRole,
          eventName: r.eventRequest.eventName,
          venue: r.eventRequest.venue.name,
          startTime: r.eventRequest.startTime.toISOString(),
          clubName: r.eventRequest.club.name,
          facultyInChargeId: r.eventRequest.club.facultyInChargeId,
        }))}
      />
    </div>
  );
}

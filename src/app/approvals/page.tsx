import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { ApprovalsView } from "./approvals-view";

export default async function ApprovalsPage() {
  const session = await getSession();

  if (!session || session.role === "CLUB") {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <p className="text-sm text-[#6B7C93]">Approvals are only available to faculty accounts.</p>
      </div>
    );
  }

  const pendingRequirements = await db.requestRequirement.findMany({
    where: { status: "PENDING", docRule: { kind: "SIGNATURE" } },
    include: {
      docRule: true,
      eventRequest: { include: { club: { include: { facultyInCharge: true } }, venue: true } },
    },
    orderBy: { updatedAt: "asc" },
  });

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#0A2540] tracking-tight">Approvals</h1>
        <p className="text-sm text-[#6B7C93] mt-1">Sign-off requests awaiting your review.</p>
      </div>
      <ApprovalsView
        session={{ id: session.id, name: session.name, role: session.role as "FACULTY" | "PRINCIPAL" }}
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

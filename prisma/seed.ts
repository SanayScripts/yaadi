import { PrismaClient, VenueType, Role, RuleKind } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const gst = await prisma.venue.create({ data: { name: "GST Auditorium", type: VenueType.AUDI, capacity: 500 } });
  const mba = await prisma.venue.create({ data: { name: "MBA Auditorium", type: VenueType.AUDI, capacity: 300 } });
  await prisma.venue.createMany({
    data: [
      { name: "Room 101", type: VenueType.OTHER, capacity: 60 },
      { name: "Room 204", type: VenueType.OTHER, capacity: 60 },
      { name: "Seminar Hall", type: VenueType.OTHER, capacity: 120 },
      { name: "Ground", type: VenueType.OTHER, capacity: 1000 },
    ],
  });

  const principal = await prisma.faculty.create({ data: { name: "Dr. R. Menon", role: Role.PRINCIPAL } });
  const facultyA = await prisma.faculty.create({ data: { name: "Prof. S. Iyer", role: Role.FACULTY } });
  const facultyB = await prisma.faculty.create({ data: { name: "Prof. K. Shah", role: Role.FACULTY } });
  const facultyC = await prisma.faculty.create({ data: { name: "Prof. A. Desai", role: Role.FACULTY } });

  await prisma.club.create({ data: { name: "GDG Campus", facultyInChargeId: facultyA.id } });
  await prisma.club.create({ data: { name: "Robotics Club", facultyInChargeId: facultyB.id } });
  await prisma.club.create({ data: { name: "Cultural Committee", facultyInChargeId: facultyC.id } });
  await prisma.club.create({ data: { name: "IEEE Student Chapter", facultyInChargeId: facultyA.id } });

  await prisma.docRule.createMany({
    data: [
      { label: "Fire Safety NOC", kind: RuleKind.UPLOAD, minFootfall: 200 },
      { label: "External Guest Approval", kind: RuleKind.UPLOAD, requiresGuest: true },
      { label: "Faculty In-charge Sign-off", kind: RuleKind.SIGNATURE, audiOnly: true, signerRole: Role.FACULTY },
      { label: "Principal Sign-off", kind: RuleKind.SIGNATURE, audiOnly: true, signerRole: Role.PRINCIPAL },
      { label: "Equipment Indemnity Form", kind: RuleKind.UPLOAD },
    ],
  });

  console.log("Seeded:", { gst: gst.id, mba: mba.id, principal: principal.id });
}

main().finally(() => prisma.$disconnect());

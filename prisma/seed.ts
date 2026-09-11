import { PrismaClient, VenueType, Role, RuleKind, RequestStatus, RequirementStatus } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // wipe in FK-safe order
  await prisma.requestRequirement.deleteMany();
  await prisma.eventRequest.deleteMany();
  await prisma.docRule.deleteMany();
  await prisma.club.deleteMany();
  await prisma.faculty.deleteMany();
  await prisma.venue.deleteMany();

  const gst = await prisma.venue.create({ data: { name: "GST Auditorium", type: VenueType.AUDI, capacity: 500 } });
  const mba = await prisma.venue.create({ data: { name: "MBA Auditorium", type: VenueType.AUDI, capacity: 300 } });
  const room101 = await prisma.venue.create({ data: { name: "Room 101", type: VenueType.OTHER, capacity: 60 } });
  const room204 = await prisma.venue.create({ data: { name: "Room 204", type: VenueType.OTHER, capacity: 60 } });
  const seminarHall = await prisma.venue.create({ data: { name: "Seminar Hall", type: VenueType.OTHER, capacity: 120 } });
  const ground = await prisma.venue.create({ data: { name: "Ground", type: VenueType.OTHER, capacity: 1000 } });

  const principal = await prisma.faculty.create({ data: { name: "Dr. K. Lakshmi Sudha", role: Role.PRINCIPAL } });
  const bannore = await prisma.faculty.create({ data: { name: "Dr. Aparna M. Bannore", role: Role.FACULTY } });
  const hemnani = await prisma.faculty.create({ data: { name: "Dr. Preeti Hemnani", role: Role.FACULTY } });
  const nehete = await prisma.faculty.create({ data: { name: "Dr. Rupendra Sharad Nehete", role: Role.FACULTY } });
  const ladge = await prisma.faculty.create({ data: { name: "Prof. Leena Ladge", role: Role.FACULTY } });

  const gdg = await prisma.club.create({ data: { name: "GDG Campus", facultyInChargeId: bannore.id } });
  const robotics = await prisma.club.create({ data: { name: "Robotics Club", facultyInChargeId: nehete.id } });
  const cultural = await prisma.club.create({ data: { name: "Cultural Committee", facultyInChargeId: hemnani.id } });
  const ieee = await prisma.club.create({ data: { name: "IEEE Student Chapter", facultyInChargeId: ladge.id } });

  await prisma.docRule.createMany({
    data: [
      { label: "Fire Safety NOC", kind: RuleKind.UPLOAD, minFootfall: 200 },
      { label: "External Guest Approval", kind: RuleKind.UPLOAD, requiresGuest: true },
      { label: "Faculty In-charge Sign-off", kind: RuleKind.SIGNATURE, audiOnly: true, signerRole: Role.FACULTY },
      { label: "Principal Sign-off", kind: RuleKind.SIGNATURE, audiOnly: true, signerRole: Role.PRINCIPAL },
      { label: "Equipment Indemnity Form", kind: RuleKind.UPLOAD },
    ],
  });
  const rules = await prisma.docRule.findMany();
  const ruleByLabel = (label: string) => rules.find((r) => r.label === label)!;

  // TechFest Inauguration — GST Audi, full checklist, both sign-offs left pending for live demo
  const techfest = await prisma.eventRequest.create({
    data: {
      clubId: gdg.id,
      eventName: "TechFest Inauguration",
      venueId: gst.id,
      startTime: new Date("2026-09-18T10:00:00"),
      endTime: new Date("2026-09-18T13:00:00"),
      footfall: 300,
      hasExternalGuest: true,
      equipment: ["mic", "projector", "stage lighting"],
      status: RequestStatus.CONFIRMED,
    },
  });
  await prisma.requestRequirement.createMany({
    data: [
      { eventRequestId: techfest.id, docRuleId: ruleByLabel("Fire Safety NOC").id, status: RequirementStatus.UPLOADED, fileUrl: "fire-noc-techfest.pdf" },
      { eventRequestId: techfest.id, docRuleId: ruleByLabel("External Guest Approval").id, status: RequirementStatus.NOT_UPLOADED },
      { eventRequestId: techfest.id, docRuleId: ruleByLabel("Faculty In-charge Sign-off").id, status: RequirementStatus.PENDING },
      { eventRequestId: techfest.id, docRuleId: ruleByLabel("Principal Sign-off").id, status: RequirementStatus.PENDING },
      { eventRequestId: techfest.id, docRuleId: ruleByLabel("Equipment Indemnity Form").id, status: RequirementStatus.VERIFIED, fileUrl: "equipment-indemnity-techfest.pdf", signedById: bannore.id },
    ],
  });

  // Annual Cultural Night — MBA Audi, faculty sign-off already done, principal still pending
  const culturalNight = await prisma.eventRequest.create({
    data: {
      clubId: cultural.id,
      eventName: "Annual Cultural Night",
      venueId: mba.id,
      startTime: new Date("2026-09-25T17:00:00"),
      endTime: new Date("2026-09-25T21:00:00"),
      footfall: 250,
      hasExternalGuest: true,
      equipment: ["mic", "speakers", "stage lighting"],
      status: RequestStatus.CONFIRMED,
    },
  });
  await prisma.requestRequirement.createMany({
    data: [
      { eventRequestId: culturalNight.id, docRuleId: ruleByLabel("Fire Safety NOC").id, status: RequirementStatus.VERIFIED, fileUrl: "fire-noc-cultural.pdf" },
      { eventRequestId: culturalNight.id, docRuleId: ruleByLabel("External Guest Approval").id, status: RequirementStatus.UPLOADED, fileUrl: "guest-approval-cultural.pdf" },
      { eventRequestId: culturalNight.id, docRuleId: ruleByLabel("Faculty In-charge Sign-off").id, status: RequirementStatus.VERIFIED, signedById: hemnani.id },
      { eventRequestId: culturalNight.id, docRuleId: ruleByLabel("Principal Sign-off").id, status: RequirementStatus.PENDING },
      { eventRequestId: culturalNight.id, docRuleId: ruleByLabel("Equipment Indemnity Form").id, status: RequirementStatus.NOT_UPLOADED },
    ],
  });

  // Robotics Workshop — classroom, pending confirmation, equipment-only requirement
  const roboticsWorkshop = await prisma.eventRequest.create({
    data: {
      clubId: robotics.id,
      eventName: "Robotics Workshop: Intro to ROS",
      venueId: room101.id,
      startTime: new Date("2026-09-16T14:00:00"),
      endTime: new Date("2026-09-16T17:00:00"),
      footfall: 40,
      hasExternalGuest: false,
      equipment: ["soldering kits", "laptops"],
      status: RequestStatus.PENDING,
    },
  });
  await prisma.requestRequirement.create({
    data: { eventRequestId: roboticsWorkshop.id, docRuleId: ruleByLabel("Equipment Indemnity Form").id, status: RequirementStatus.NOT_UPLOADED },
  });

  // IEEE Tech Talk — seminar hall, pending, no requirements
  await prisma.eventRequest.create({
    data: {
      clubId: ieee.id,
      eventName: "Tech Talk: Cloud Computing Fundamentals",
      venueId: seminarHall.id,
      startTime: new Date("2026-09-22T15:00:00"),
      endTime: new Date("2026-09-22T17:00:00"),
      footfall: 80,
      hasExternalGuest: false,
      equipment: [],
      status: RequestStatus.PENDING,
    },
  });

  // Sports Day — ground, pending, high footfall triggers Fire Safety NOC
  const sportsDay = await prisma.eventRequest.create({
    data: {
      clubId: cultural.id,
      eventName: "Inter-Department Sports Day",
      venueId: ground.id,
      startTime: new Date("2026-10-02T08:00:00"),
      endTime: new Date("2026-10-02T18:00:00"),
      footfall: 500,
      hasExternalGuest: false,
      equipment: ["PA system"],
      status: RequestStatus.PENDING,
    },
  });
  await prisma.requestRequirement.createMany({
    data: [
      { eventRequestId: sportsDay.id, docRuleId: ruleByLabel("Fire Safety NOC").id, status: RequirementStatus.NOT_UPLOADED },
      { eventRequestId: sportsDay.id, docRuleId: ruleByLabel("Equipment Indemnity Form").id, status: RequirementStatus.NOT_UPLOADED },
    ],
  });

  console.log("Seeded with realistic SIESGST names and 5 demo events.");
}

main().finally(() => prisma.$disconnect());

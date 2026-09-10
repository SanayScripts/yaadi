const items = [
  {
    title: "Department approval routing",
    description: "Route requests to security and accounts for sign-off, beyond faculty and principal.",
  },
  {
    title: "Document verification workflow",
    description: "A dedicated admin review queue for uploaded documents, with approve/reject and comments.",
  },
  {
    title: "Equipment inventory",
    description: "Real stock tracking per item instead of a free-text tag list, with availability checks at booking time.",
  },
  {
    title: "Post-event reporting",
    description: "Auto-generated wrap-up reports pulling attendance, footfall, and document trail per event.",
  },
  {
    title: "Cryptographic digital signatures",
    description: "Legally binding signed documents, replacing the approve/reject click used today.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#0A2540] tracking-tight">Roadmap</h1>
        <p className="text-sm text-[#6B7C93] mt-1">Scoped but not built — here's where Yaadi goes next.</p>
      </div>

      <div className="border border-[#E3E8EE] rounded-lg divide-y divide-[#E3E8EE] bg-white shadow-sm overflow-hidden">
        {items.map((item) => (
          <div key={item.title} className="px-5 py-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#0A2540]">{item.title}</p>
              <p className="text-xs text-[#6B7C93] mt-1 max-w-md">{item.description}</p>
            </div>
            <span className="shrink-0 text-[11px] font-medium text-[#6B7C93] bg-[#F0F3F8] px-2 py-1 rounded-full">
              Planned
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useTransition } from "react";
import { decideRequirement } from "@/app/requests/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Faculty = { id: string; name: string; role: string };
type Requirement = {
  id: string;
  label: string;
  signerRole: string | null;
  eventName: string;
  venue: string;
  startTime: string;
  clubName: string;
  facultyInChargeId: string;
};

export function ApprovalsView({ faculty, requirements }: { faculty: Faculty[]; requirements: Requirement[] }) {
  const [facultyId, setFacultyId] = useState("");
  const [decided, setDecided] = useState<Set<string>>(new Set());
  const [pending, startTransition] = useTransition();

  const selectedFaculty = faculty.find((f) => f.id === facultyId);

  const visible = requirements.filter((r) => {
    if (decided.has(r.id)) return false;
    if (!selectedFaculty) return false;
    if (r.signerRole === "PRINCIPAL") return selectedFaculty.role === "PRINCIPAL";
    if (r.signerRole === "FACULTY") return r.facultyInChargeId === selectedFaculty.id;
    return false;
  });

  function handleDecision(id: string, decision: "VERIFIED" | "REJECTED") {
    setDecided((prev) => new Set(prev).add(id));
    startTransition(() => decideRequirement(id, facultyId, decision));
  }

  return (
    <div className="space-y-6">
      <div className="max-w-xs">
        <Select value={facultyId} onValueChange={(v) => setFacultyId(v ?? "")}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="I am...">
              {selectedFaculty ? `${selectedFaculty.name}${selectedFaculty.role === "PRINCIPAL" ? " (Principal)" : ""}` : "I am..."}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {faculty.map((f) => (
              <SelectItem key={f.id} value={f.id}>{f.name}{f.role === "PRINCIPAL" ? " (Principal)" : ""}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!selectedFaculty && (
        <p className="text-sm text-[#6B7C93] border border-dashed border-[#E3E8EE] rounded-lg px-4 py-8 text-center">
          Select who you are to see items awaiting your sign-off.
        </p>
      )}

      {selectedFaculty && visible.length === 0 && (
        <p className="text-sm text-[#6B7C93] border border-dashed border-[#E3E8EE] rounded-lg px-4 py-8 text-center">
          Nothing pending your approval.
        </p>
      )}

      <div className="border border-[#E3E8EE] rounded-lg divide-y divide-[#E3E8EE] bg-white shadow-sm overflow-hidden">
        {visible.map((r) => (
          <div key={r.id} className="px-5 py-4 flex items-center justify-between gap-4">
            <div>
              <Link href="#" className="text-sm font-medium text-[#0A2540] hover:text-[#635BFF] transition-colors">{r.eventName}</Link>
              <p className="text-xs text-[#6B7C93] mt-0.5">
                {r.clubName} · {r.venue} · {new Date(r.startTime).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}
              </p>
              <p className="text-xs text-[#8A98AC] mt-0.5">{r.label}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline" className="border-[#E3E8EE]" disabled={pending} onClick={() => handleDecision(r.id, "REJECTED")}>
                Reject
              </Button>
              <Button size="sm" className="bg-[#635BFF] hover:bg-[#5147E0] text-white" disabled={pending} onClick={() => handleDecision(r.id, "VERIFIED")}>
                Approve
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

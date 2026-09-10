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
        <Select value={facultyId} onValueChange={setFacultyId}>
          <SelectTrigger className="w-full">
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
        <p className="text-sm text-neutral-400 border border-dashed border-neutral-200 rounded-lg px-4 py-6 text-center">
          Select who you are to see items awaiting your sign-off.
        </p>
      )}

      {selectedFaculty && visible.length === 0 && (
        <p className="text-sm text-neutral-400 border border-dashed border-neutral-200 rounded-lg px-4 py-6 text-center">
          Nothing pending your approval.
        </p>
      )}

      <div className="border border-neutral-200 rounded-lg divide-y divide-neutral-100 bg-white">
        {visible.map((r) => (
          <div key={r.id} className="px-4 py-3.5 flex items-center justify-between gap-4">
            <div>
              <Link href="#" className="text-sm font-medium text-neutral-900 hover:text-indigo-600">{r.eventName}</Link>
              <p className="text-xs text-neutral-500 mt-0.5">
                {r.clubName} · {r.venue} · {new Date(r.startTime).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">{r.label}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline" disabled={pending} onClick={() => handleDecision(r.id, "REJECTED")}>
                Reject
              </Button>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700" disabled={pending} onClick={() => handleDecision(r.id, "VERIFIED")}>
                Approve
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

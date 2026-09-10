"use client";

import { useState, useTransition } from "react";
import { uploadRequirementFile } from "@/app/requests/actions";
import { Badge } from "@/components/ui/badge";

type Requirement = {
  id: string;
  status: string;
  fileUrl: string | null;
  docRule: { label: string; kind: string; signerRole: string | null };
  signedBy: { name: string } | null;
};

const statusColor: Record<string, string> = {
  NOT_UPLOADED: "bg-neutral-100 text-neutral-600 hover:bg-neutral-100",
  UPLOADED: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  PENDING: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  VERIFIED: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
};

export function RequirementItem({ req }: { req: Requirement }) {
  const [pending, startTransition] = useTransition();
  const [localStatus, setLocalStatus] = useState(req.status);
  const [fileName, setFileName] = useState(req.fileUrl);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setLocalStatus("UPLOADED");
    startTransition(() => uploadRequirementFile(req.id, file.name));
  }

  return (
    <div className="px-4 py-3 flex items-center justify-between text-sm gap-4">
      <div>
        <p className="text-neutral-800">{req.docRule.label}</p>
        {req.docRule.kind === "SIGNATURE" && (
          <p className="text-xs text-neutral-500 mt-0.5">
            Needs sign-off {req.docRule.signerRole === "PRINCIPAL" ? "from Principal" : "from faculty in-charge"}
            {req.signedBy ? ` — signed by ${req.signedBy.name}` : ""}
          </p>
        )}
        {req.docRule.kind === "UPLOAD" && fileName && (
          <p className="text-xs text-neutral-500 mt-0.5">{fileName}</p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {req.docRule.kind === "UPLOAD" && localStatus === "NOT_UPLOADED" && (
          <label className="text-xs text-indigo-600 hover:text-indigo-700 cursor-pointer underline">
            Upload
            <input type="file" className="hidden" onChange={handleFile} disabled={pending} />
          </label>
        )}
        <Badge className={statusColor[localStatus]}>{localStatus.replace("_", " ")}</Badge>
      </div>
    </div>
  );
}

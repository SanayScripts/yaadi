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
  NOT_UPLOADED: "bg-[#F0F3F8] text-[#6B7C93] hover:bg-[#F0F3F8]",
  UPLOADED: "bg-[#E5EDFF] text-[#3538CD] hover:bg-[#E5EDFF]",
  PENDING: "bg-[#FFF6DC] text-[#8A6100] hover:bg-[#FFF6DC]",
  VERIFIED: "bg-[#E3F9ED] text-[#067647] hover:bg-[#E3F9ED]",
  REJECTED: "bg-[#FDE2E5] text-[#A6161A] hover:bg-[#FDE2E5]",
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
    <div className="px-5 py-3.5 flex items-center justify-between text-sm gap-4">
      <div>
        <p className="text-[#0A2540]">{req.docRule.label}</p>
        {req.docRule.kind === "SIGNATURE" && (
          <p className="text-xs text-[#6B7C93] mt-0.5">
            Needs sign-off {req.docRule.signerRole === "PRINCIPAL" ? "from Principal" : "from faculty in-charge"}
            {req.signedBy ? ` — signed by ${req.signedBy.name}` : ""}
          </p>
        )}
        {req.docRule.kind === "UPLOAD" && fileName && (
          <p className="text-xs text-[#6B7C93] mt-0.5">{fileName}</p>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {req.docRule.kind === "UPLOAD" && localStatus === "NOT_UPLOADED" && (
          <label className="text-xs text-[#635BFF] hover:text-[#5147E0] cursor-pointer font-medium">
            Upload
            <input type="file" className="hidden" onChange={handleFile} disabled={pending} />
          </label>
        )}
        <Badge className={statusColor[localStatus]}>{localStatus.replace("_", " ")}</Badge>
      </div>
    </div>
  );
}

"use client";

import { evaluateRules, ruleReason, type RequestAttrs } from "@/lib/rules";
import type { DocRule } from "@/generated/prisma";

export function LiveChecklist({ rules, attrs }: { rules: DocRule[]; attrs: RequestAttrs }) {
  const matched = evaluateRules(rules, attrs);

  if (matched.length === 0) {
    return (
      <p className="text-sm text-[#6B7C93] border border-dashed border-[#E3E8EE] rounded-lg px-4 py-3">
        No documents required based on current details.
      </p>
    );
  }

  return (
    <div className="border border-[#E3E8EE] rounded-lg divide-y divide-[#E3E8EE] bg-[#F5F4FF] overflow-hidden">
      {matched.map((rule) => (
        <div key={rule.id} className="px-4 py-2.5 flex items-center justify-between text-sm">
          <span className="text-[#0A2540]">{rule.label}</span>
          <span className="text-xs text-[#6B7C93]">{ruleReason(rule)}</span>
        </div>
      ))}
    </div>
  );
}

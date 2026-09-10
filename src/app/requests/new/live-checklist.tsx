"use client";

import { evaluateRules, ruleReason, type RequestAttrs } from "@/lib/rules";
import type { DocRule } from "@/generated/prisma";

export function LiveChecklist({ rules, attrs }: { rules: DocRule[]; attrs: RequestAttrs }) {
  const matched = evaluateRules(rules, attrs);

  if (matched.length === 0) {
    return (
      <p className="text-sm text-neutral-400 border border-dashed border-neutral-200 rounded-lg px-4 py-3">
        No documents required based on current details.
      </p>
    );
  }

  return (
    <div className="border border-neutral-200 rounded-lg divide-y divide-neutral-100 bg-indigo-50/30">
      {matched.map((rule) => (
        <div key={rule.id} className="px-4 py-2.5 flex items-center justify-between text-sm">
          <span className="text-neutral-800">{rule.label}</span>
          <span className="text-xs text-neutral-500">{ruleReason(rule)}</span>
        </div>
      ))}
    </div>
  );
}

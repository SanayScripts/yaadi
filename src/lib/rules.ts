import type { DocRule } from "@/generated/prisma";

export type RequestAttrs = {
  footfall: number;
  hasExternalGuest: boolean;
  isAudi: boolean;
  hasEquipment: boolean;
};

export function evaluateRules(rules: DocRule[], attrs: RequestAttrs): DocRule[] {
  return rules.filter((rule) => {
    if (rule.minFootfall != null && attrs.footfall < rule.minFootfall) return false;
    if (rule.requiresGuest && !attrs.hasExternalGuest) return false;
    if (rule.audiOnly && !attrs.isAudi) return false;
    // Known limitation: equipment-triggered rule is matched by label, not a schema condition field.
    if (rule.label === "Equipment Indemnity Form" && !attrs.hasEquipment) return false;
    return true;
  });
}

export function ruleReason(rule: DocRule): string {
  const reasons: string[] = [];
  if (rule.minFootfall != null) reasons.push(`footfall ≥ ${rule.minFootfall}`);
  if (rule.requiresGuest) reasons.push("external guest");
  if (rule.audiOnly) reasons.push("auditorium booking");
  if (rule.label === "Equipment Indemnity Form") reasons.push("equipment requested");
  return reasons.length ? reasons.join(", ") : "always required";
}

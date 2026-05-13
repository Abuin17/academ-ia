const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const VALID_SEGMENTS = ["padre", "profesional", "empresa"] as const;
export type Segment = (typeof VALID_SEGMENTS)[number];

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 320 && EMAIL_RE.test(value);
}

export function isValidSegment(value: unknown): value is Segment {
  return typeof value === "string" && (VALID_SEGMENTS as readonly string[]).includes(value);
}

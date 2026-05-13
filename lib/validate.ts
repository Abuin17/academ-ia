const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 320 && EMAIL_RE.test(value);
}

export function normalizeSegment(value: unknown): string {
  if (typeof value === "string" && value.trim().length > 0 && value.length <= 64) {
    return value.trim();
  }
  return "unspecified";
}

export function normalizeCity(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > 80) return null;
  return trimmed;
}

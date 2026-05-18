export function getSecret(key: string): string {
  return (import.meta.env as Record<string, string>)[key] ?? "";
}

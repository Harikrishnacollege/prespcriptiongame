const COMPLETED_KEY = "prescription-master-completed";
const SOUND_KEY = "prescription-master-sound";

export function getCompletedCases(): string[] {
  return JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? "[]") as string[];
}

export function markCompleted(caseId: string): void {
  const current = new Set(getCompletedCases());
  current.add(caseId);
  localStorage.setItem(COMPLETED_KEY, JSON.stringify([...current]));
}

export function getCompletedCount(caseIds: string[]): number {
  const completed = new Set(getCompletedCases());
  return caseIds.filter((caseId) => completed.has(caseId)).length;
}

export function resetCompleted(): void {
  localStorage.removeItem(COMPLETED_KEY);
}

export function getSoundEnabled(): boolean {
  return localStorage.getItem(SOUND_KEY) !== "off";
}

export function setSoundEnabled(enabled: boolean): void {
  localStorage.setItem(SOUND_KEY, enabled ? "on" : "off");
}

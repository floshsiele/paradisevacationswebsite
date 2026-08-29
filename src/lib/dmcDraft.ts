import { useSyncExternalStore } from "react";

export interface DmcDraft {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  destination?: string;
  arrival?: string;
  departure?: string;
  groupSize?: string;
  services?: string[];
  notes?: string;
  attachmentName?: string;
}

let draft: DmcDraft = {};
const listeners = new Set<() => void>();

export function setDmcDraft(next: DmcDraft) {
  draft = next;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useDmcDraft() {
  return useSyncExternalStore(
    subscribe,
    () => draft,
    () => draft,
  );
}

/** Builds a WhatsApp-ready brief from whatever the visitor has filled in so far. */
export function buildDmcMessage(data: DmcDraft) {
  const lines = [
    "DMC INQUIRY — Paradise Vacations Kenya",
    "",
    data.name ? `Name: ${data.name}` : null,
    data.company ? `Company: ${data.company}` : null,
    data.email ? `Email: ${data.email}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.destination ? `Destination(s): ${data.destination}` : null,
    data.arrival ? `Arrival: ${data.arrival}` : null,
    data.departure ? `Departure: ${data.departure}` : null,
    data.groupSize ? `Group size: ${data.groupSize} pax` : null,
    data.services?.length ? `Services required: ${data.services.join(", ")}` : null,
    data.notes ? `Notes: ${data.notes}` : null,
    data.attachmentName ? `Attachment: ${data.attachmentName} (will share on request)` : null,
  ].filter(Boolean);

  return lines.length > 2
    ? lines.join("\n")
    : "Hello Paradise Vacations, I'd like a DMC ground-handling proposal for a group coming to East Africa.";
}

export function hasDmcDraft(data: DmcDraft) {
  return Boolean(
    data.name || data.destination || data.arrival || data.groupSize || data.services?.length,
  );
}

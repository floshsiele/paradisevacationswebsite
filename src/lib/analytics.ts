/**
 * Lightweight, provider-agnostic event tracking.
 *
 * Events are forwarded to Google Tag Manager (`window.dataLayer`) and/or
 * gtag.js (`window.gtag`) when either is installed, and always re-emitted as a
 * DOM CustomEvent (`pv:track`) so any other analytics tool can subscribe.
 * Nothing is loaded or installed here — this only reports.
 */

type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  const payload: Record<string, unknown> = { ...params };
  Object.keys(payload).forEach((k) => payload[k] === undefined && delete payload[k]);

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
    window.gtag?.("event", event, payload);
    window.dispatchEvent(new CustomEvent("pv:track", { detail: { event, ...payload } }));
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("[track]", event, payload);
    }
  } catch {
    /* analytics must never break the UI */
  }
}

/** A click on any call-to-action button or link. */
export function trackCta(label: string, params: TrackParams = {}) {
  trackEvent("cta_click", {
    cta_label: label,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...params,
  });
}

/** A click on a package card / package CTA. */
export function trackPackageCta(slug: string, name: string, params: TrackParams = {}) {
  trackEvent("package_cta_click", {
    package_slug: slug,
    package_name: name,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...params,
  });
}

/** A successfully submitted form — the conversion event. */
export function trackFormSubmit(formName: string, params: TrackParams = {}) {
  trackEvent("form_submit_success", {
    form_name: formName,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...params,
  });
  trackEvent("generate_lead", { form_name: formName, ...params });
}

export function formatDateUTC(
  iso: string,
  locale: "en-US" | "en-GB" | string = "en-US"
) {
  // Force UTC so time zone doesn’t shift the date
  const d = new Date(iso + (iso.endsWith("Z") ? "" : "T00:00:00Z"));
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  }).format(d);
}

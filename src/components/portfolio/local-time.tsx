"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 1000);
  return () => window.clearInterval(interval);
}

// A stable minute snapshot avoids rerendering the clock every second.
const getSnapshot = () => Math.floor(Date.now() / 60_000) * 60_000;
const getServerSnapshot = () => null;

export function LocalTime() {
  const timestamp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const time = timestamp === null ? null : formatter.format(timestamp).toUpperCase();

  return <time className="location-time" dateTime={timestamp === null ? undefined : new Date(timestamp).toISOString()} aria-label={time ? `My local time: ${time}, India Standard Time` : "India Standard Time"}>
    it’s {time ?? "--:--"} <span>for me</span>
  </time>;
}

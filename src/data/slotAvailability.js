import { formatPrice } from "./turfs";

const STITCH_SLOT_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApGPvfD6-mEHLHSY9uzH5Tg3bnkwMTDssGVjLPKBkjc-xJKcDHmecUxQeFrkKxUgMrwG5BVhjuc3IX37uCvjOn9ZE6KN-oGvl_3613aJnIptCB3aeTsZARD2G-QNOrD023WoLOMn0kUhT3XJhIwzok0YWoI03N2ZZC_d2kuGGm6SE8wbleDj-xR9_6aHn9YtQhKyObnSY6seW7XuzB6neqQR1AG880IkeC5d2Zq7S5hpNQpzZ9KswMWn1yj8kF-lOodH4O1ynFmg";

export const MORNING_TIMES = ["06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"];
export const EVENING_TIMES = [
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
];

function hash32(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return h >>> 0;
}

function isBooked(turfId, time, salt) {
  return hash32(`${turfId}|${time}|${salt}`) % 6 < 2;
}

export function getSlotPageModel(t) {
  const c = t.booking.currency;
  const hourly = t.dayTier.price;
  const morning = MORNING_TIMES.map((time) => ({ time, booked: isBooked(t.id, time, "m") }));
  const evening = EVENING_TIMES.map((time) => ({ time, booked: isBooked(t.id, time, "e") }));
  const wants = ["09:00 AM", "06:00 PM"];
  const isAvailable = (time) => {
    const row = [...morning, ...evening].find((x) => x.time === time);
    return row && !row.booked;
  };
  const defaultSelected = wants.filter(isAvailable).slice(0, 2);
  const d = new Date(t.booking.defaultDate);
  const dateAnchor = Number.isNaN(d.getTime()) ? new Date() : d;
  return {
    turfId: t.id,
    backHref: `/turf-details/${t.id}`,
    title: t.title,
    address: t.address,
    currency: c,
    hourlyLabel: `${formatPrice(hourly, c).replace(/\s/g, " ")} / hour`,
    hourlyNumber: hourly,
    heroImage: t.gallery[0] ?? STITCH_SLOT_HERO,
    heroTitle: "Premium synthetic grass",
    heroSubtitle: "Turffin certified play surface",
    morning,
    evening,
    defaultSelected,
    dateAnchor: dateAnchor.toISOString(),
    daySummaryLabel: t.booking.defaultDate,
  };
}

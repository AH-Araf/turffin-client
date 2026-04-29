"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MORNING_TIMES, EVENING_TIMES, NIGHT_TIMES, LATE_NIGHT_TIMES } from "@/data/slotAvailability";
import { formatPrice } from "@/data/turfs";

const allSlotOrder = [...MORNING_TIMES, ...EVENING_TIMES, ...NIGHT_TIMES, ...LATE_NIGHT_TIMES];
const BLOCK_RATES = {
  morning: 1200,
  evening: 1800,
  night: 2200,
  lateNight: 2500,
};
const BLOCK_RATE_LABELS = {
  morning: "৳1,200/ hour",
  evening: "৳1,800/ hour",
  night: "৳2,200/ hour",
  lateNight: "৳2,500/ hour",
};

function getSlotPrice(time) {
  if (MORNING_TIMES.includes(time)) return BLOCK_RATES.morning;
  if (EVENING_TIMES.includes(time)) return BLOCK_RATES.evening;
  if (NIGHT_TIMES.includes(time)) return BLOCK_RATES.night;
  if (LATE_NIGHT_TIMES.includes(time)) return BLOCK_RATES.lateNight;
  return 0;
}

function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function sameCalendarDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function sortTimeLabels(list) {
  return [...list].sort((a, b) => allSlotOrder.indexOf(a) - allSlotOrder.indexOf(b));
}

export function SlotPicker({ model, lexendClassName }) {
  const anchor = useMemo(() => new Date(model.dateAnchor), [model.dateAnchor]);
  const [dayBlock, setDayBlock] = useState(0);
  const [selectedDate, setSelectedDate] = useState(anchor);
  const [selectedSlots, setSelectedSlots] = useState(new Set(model.defaultSelected));

  const dayStrip = useMemo(() => {
    const start = dayBlock * 5;
    return Array.from({ length: 5 }, (_, i) => addDays(anchor, start + i));
  }, [anchor, dayBlock]);

  const goPrev = () => setDayBlock((b) => Math.max(0, b - 1));
  const goNext = () => setDayBlock((b) => b + 1);

  const toggle = (time, booked) => {
    if (booked) return;
    setSelectedSlots((prev) => {
      const next = new Set(prev);
      if (next.has(time)) next.delete(time);
      else next.add(time);
      return next;
    });
  };

  const slotState = (time) => (selectedSlots.has(time) ? "selected" : "available");

  const renderSlot = (row) => {
    const s = row.booked ? "booked" : slotState(row.time);
    const isBooked = s === "booked";
    const isSel = s === "selected";
    return (
      <button
        key={row.time}
        type="button"
        onClick={() => toggle(row.time, row.booked)}
        className={[
          "group relative flex min-h-16 flex-col items-center justify-center gap-1 rounded-lg px-2 py-2.5 transition-all",
          isBooked
            ? "cursor-not-allowed bg-slate-200/90 opacity-60"
            : isSel
              ? "cursor-pointer bg-yellow-400 text-turf-on-yellow shadow-md ring-2 ring-slate-900"
              : "cursor-pointer border-2 border-turf-primary-container bg-white hover:shadow-sm",
        ].join(" ")}
      >
        <span className={`font-mono text-xs ${isBooked ? "line-through text-turf-on-surface-variant" : isSel ? "font-bold text-turf-on-yellow" : "text-turf-on-surface"}`}>
          {row.time}
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-wide ${isBooked ? "text-turf-on-surface-variant" : isSel ? "text-turf-on-yellow" : "text-turf-primary"}`}>
          {isBooked ? "Booked" : isSel ? "Selected" : "Available"}
        </span>
      </button>
    );
  };

  const sortedSelected = sortTimeLabels([...selectedSlots]);
  const total = sortedSelected.reduce((sum, time) => sum + getSlotPrice(time), 0);
  const timeSummary = sortedSelected.length === 0 ? "—" : sortedSelected.slice(0, 3).join(", ") + (sortedSelected.length > 3 ? "…" : "");
  const dateSummary = selectedDate.toLocaleDateString("en-BD", { month: "short", day: "numeric" });

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center">
        <Link href={model.backHref} className="inline-flex text-sm font-semibold text-turf-primary transition-colors hover:text-turf-primary-pressed">
          ← Back to venue
        </Link>
        <p className="text-xs font-medium text-turf-on-surface-variant">24 hour booking board</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="space-y-4 lg:sticky lg:top-4">
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className={`${lexendClassName} text-sm font-semibold text-turf-on-surface`}>Availability legend</h2>
            <ul className="space-y-3 text-xs text-turf-on-surface">
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-turf-primary-container bg-white"><span className="text-turf-primary" aria-hidden>✓</span></div>
                <div><p className="font-bold">Available</p><p className="text-[10px] text-turf-on-surface-variant">৳(1,200 - 2500)/ hour</p></div>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-transparent bg-slate-200/90"><span className="text-turf-on-surface-variant" aria-hidden>✕</span></div>
                <div><p className="font-bold text-turf-on-surface">Occupied</p><p className="text-[10px] italic text-turf-on-surface-variant">Already booked</p></div>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-yellow-400 ring-2 ring-slate-900"><span className="text-slate-900" aria-hidden>◆</span></div>
                <div><p className="font-bold">Selected</p><p className="text-[10px] text-turf-on-surface-variant">Current choice</p></div>
              </li>
            </ul>
          </div>

          <div className="group relative aspect-square overflow-hidden rounded-xl shadow-turf-glow">
            <img src={model.heroImage} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-900/80 to-transparent p-4 text-white">
              <div><p className="font-bold">{model.heroTitle}</p><p className="text-xs text-white/80">{model.heroSubtitle}</p></div>
            </div>
          </div>
        </aside>

        <section className="min-w-0 space-y-4">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-turf-primary">Premium selection</p>
                <h1 className={`${lexendClassName} text-lg font-bold leading-tight text-turf-on-surface`}>{model.title}</h1>
                <p className="text-xs text-turf-on-surface-variant">{model.address}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-turf-on-surface-variant">Total amount</p>
                <p className="text-xl font-black text-turf-primary">{formatPrice(total, model.currency)}</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-2 rounded-lg bg-turf-surface-low px-3 py-2 sm:flex-row sm:items-center">
              <p className="min-w-0 text-xs font-semibold text-turf-on-surface sm:truncate">{selectedSlots.size} slot{selectedSlots.size === 1 ? "" : "s"} · {dateSummary} · {timeSummary}</p>
              <button type="button" className={`${lexendClassName} shrink-0 rounded-lg bg-turf-primary-container px-4 py-2 text-xs font-black text-turf-on-primary-container transition hover:opacity-90`}>
                Proceed to checkout
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <button type="button" onClick={goPrev} disabled={dayBlock === 0} className="shrink-0 rounded-md border border-slate-300 px-2 py-1 text-turf-on-surface transition hover:bg-turf-surface-low disabled:cursor-not-allowed disabled:opacity-40" aria-label="Previous days">‹</button>
              <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {dayStrip.map((d) => {
                  const isSel = sameCalendarDay(d, selectedDate);
                  const w = d.toLocaleDateString("en-BD", { weekday: "short" });
                  return (
                    <button
                      key={d.getTime()}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={[
                        "flex min-w-14 flex-col items-center rounded-md px-2 py-1.5",
                      isSel ? "bg-turf-primary-container text-turf-on-primary-container" : "border border-slate-300 bg-white text-turf-on-surface hover:border-turf-primary",
                      ].join(" ")}
                    >
                      <span className={`text-[10px] font-semibold uppercase ${isSel ? "text-turf-on-primary-container" : "text-turf-on-surface-variant"}`}>{d.toLocaleDateString("en-BD", { month: "short" })}</span>
                      <span className="text-base font-bold">{d.getDate()}</span>
                      <span className={`text-[10px] uppercase ${isSel ? "text-turf-on-primary-container/90" : "text-turf-on-surface-variant"}`}>{w}</span>
                    </button>
                  );
                })}
              </div>
              <button type="button" onClick={goNext} className="shrink-0 rounded-md border border-slate-300 px-2 py-1 text-turf-on-surface transition hover:bg-turf-surface-low" aria-label="Next days">›</button>
            </div>
          </div>

          <div className="grid min-w-0 gap-3 xl:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-2 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
                <h2 className={`${lexendClassName} text-base font-bold text-turf-on-surface`}>Morning</h2>
                <span className="max-w-full text-xs text-turf-on-surface-variant sm:text-right">06:00 AM - 12:00 PM · {BLOCK_RATE_LABELS.morning}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{model.morning.map((row) => renderSlot(row))}</div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-2 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
                <h2 className={`${lexendClassName} text-base font-bold text-turf-on-surface`}>Evening</h2>
                <span className="max-w-full text-xs text-turf-on-surface-variant sm:text-right">12:00 PM - 06:00 PM · {BLOCK_RATE_LABELS.evening}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{model.evening.map((row) => renderSlot(row))}</div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-2 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
                <h2 className={`${lexendClassName} text-base font-bold text-turf-on-surface`}>Night</h2>
                <span className="max-w-full text-xs text-turf-on-surface-variant sm:text-right">06:00 PM - 12:00 AM · {BLOCK_RATE_LABELS.night}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{model.night.map((row) => renderSlot(row))}</div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-2 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
                <h2 className={`${lexendClassName} text-base font-bold text-turf-on-surface`}>Late night</h2>
                <span className="max-w-full text-xs text-turf-on-surface-variant sm:text-right">12:00 AM - 06:00 AM · {BLOCK_RATE_LABELS.lateNight}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{model.lateNight.map((row) => renderSlot(row))}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

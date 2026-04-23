"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MORNING_TIMES, EVENING_TIMES } from "@/data/slotAvailability";
import { formatPrice } from "@/data/turfs";

const allSlotOrder = [...MORNING_TIMES, ...EVENING_TIMES];

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
      if (next.has(time)) {
        next.delete(time);
      } else {
        next.add(time);
      }
      return next;
    });
  };

  const slotState = (time) => {
    if (selectedSlots.has(time)) return "selected";
    return "available";
  };

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
          "group relative flex flex-col items-center justify-center gap-1 rounded-xl p-4 transition-all",
          isBooked
            ? "cursor-not-allowed bg-slate-200/90 opacity-60"
            : isSel
              ? "cursor-pointer bg-yellow-400 text-turf-on-yellow shadow-lg ring-2 ring-slate-900"
              : "cursor-pointer border-2 border-turf-primary-container bg-white hover:shadow-lg",
        ].join(" ")}
      >
        <span
          className={`font-mono text-sm ${
            isBooked
              ? "line-through text-turf-on-surface-variant"
              : isSel
                ? "font-bold"
                : "text-turf-on-surface"
          }`}
        >
          {row.time}
        </span>
        <span
          className={`text-[10px] font-bold uppercase ${
            isBooked ? "text-turf-on-surface-variant" : isSel ? "text-turf-on-yellow" : "text-turf-primary"
          }`}
        >
          {isBooked ? "Booked" : isSel ? "Selected" : "Available"}
        </span>
      </button>
    );
  };

  const sortedSelected = sortTimeLabels([...selectedSlots]);
  const total = selectedSlots.size * model.hourlyNumber;
  const timeSummary =
    sortedSelected.length === 0
      ? "—"
      : sortedSelected
          .slice(0, 3)
          .join(", ") + (sortedSelected.length > 3 ? "…" : "");
  const dateSummary = selectedDate.toLocaleDateString("en-BD", { month: "short", day: "numeric" });

  return (
    <div>
      <div className="mb-2">
        <Link
          href={model.backHref}
          className="inline-flex text-sm font-semibold text-turf-primary transition-colors hover:text-turf-primary-pressed"
        >
          ← Back to venue
        </Link>
      </div>
      <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="space-y-2">
          <span
            className="text-xs font-bold uppercase tracking-widest text-turf-primary"
          >
            Premium selection
          </span>
          <h1 className={`${lexendClassName} text-3xl font-bold leading-tight text-turf-on-surface md:text-4xl`}>
            {model.title}
          </h1>
          <div className="flex items-center gap-2 text-turf-on-surface-variant">
            <span className="text-turf-primary" aria-hidden>
              📍
            </span>
            <span>{model.address}</span>
          </div>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-turf-glow">
          <span className="px-1 text-xs font-bold uppercase tracking-widest text-turf-on-surface-variant">
            Select booking date
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={dayBlock === 0}
              className="shrink-0 cursor-pointer rounded-full p-2 transition hover:bg-turf-surface-low disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous days"
            >
              ‹
            </button>
            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dayStrip.map((d) => {
                const isSel = sameCalendarDay(d, selectedDate);
                const w = d.toLocaleDateString("en-BD", { weekday: "short" });
                return (
                  <button
                    key={d.getTime()}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={[
                      "flex min-w-16 flex-col items-center gap-0.5 rounded-lg py-3",
                      isSel
                        ? "bg-turf-primary-container text-turf-on-primary-container"
                        : "cursor-pointer border border-slate-200 bg-turf-surface text-turf-on-surface",
                    ].join(" ")}
                  >
                    <span
                      className={`text-xs font-bold uppercase ${isSel ? "text-turf-on-primary-container" : "text-turf-on-surface-variant"}`}
                    >
                      {d.toLocaleDateString("en-BD", { month: "short" })}
                    </span>
                    <span className={`text-xl font-bold ${isSel ? "text-turf-on-primary-container" : "text-turf-on-surface"}`}>
                      {d.getDate()}
                    </span>
                    <span
                      className={`text-[10px] uppercase ${
                        isSel ? "text-turf-on-primary-container/90" : "text-turf-on-surface-variant"
                      }`}
                    >
                      {w}
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="shrink-0 cursor-pointer rounded-full p-2 transition hover:bg-turf-surface-low"
              aria-label="Next days"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="mb-20 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-3">
          <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-turf-glow">
            <h2 className={`${lexendClassName} text-lg font-semibold text-turf-on-surface`}>
              Availability legend
            </h2>
            <ul className="space-y-4 text-sm text-turf-on-surface">
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-turf-primary-container bg-white">
                  <span className="text-turf-primary" aria-hidden>
                    ✓
                  </span>
                </div>
                <div>
                  <p className="font-bold">Available</p>
                  <p className="text-xs text-turf-on-surface-variant">{model.hourlyLabel}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-slate-200/90">
                  <span className="text-turf-on-surface-variant" aria-hidden>
                    ✕
                  </span>
                </div>
                <div>
                  <p className="font-bold text-turf-on-surface">Occupied</p>
                  <p className="text-xs font-normal italic text-turf-on-surface-variant">Already booked</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 ring-2 ring-slate-900">
                  <span className="text-slate-900" aria-hidden>
                    ◆
                  </span>
                </div>
                <div>
                  <p className="font-bold">Selected</p>
                  <p className="text-xs text-turf-on-surface-variant">Current choice</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-turf-glow group">
            <img
              src={model.heroImage}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-900/80 to-transparent p-6 text-white">
              <div>
                <p className="font-bold">{model.heroTitle}</p>
                <p className="text-xs text-white/80">{model.heroSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-9">
          <div className="flex items-center justify-between">
            <h2 className={`${lexendClassName} text-2xl font-bold text-turf-on-surface`}>
              Morning sessions
            </h2>
            <span className="text-sm text-turf-on-surface-variant">06:00 AM - 12:00 PM</span>
          </div>
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}
          >
            {model.morning.map((row) => renderSlot(row))}
          </div>
          <div className="pt-2">
            <div className="flex items-center justify-between">
              <h2 className={`${lexendClassName} text-2xl font-bold text-turf-on-surface`}>
                Afternoon & evening
              </h2>
              <span className="text-sm text-turf-on-surface-variant">12:00 PM - 12:00 AM</span>
            </div>
          </div>
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}
          >
            {model.evening.map((row) => renderSlot(row))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-turf-surface-low p-6 sm:flex-row sm:justify-between md:p-8">
            <div className="text-center sm:text-left">
              <h3 className={`${lexendClassName} text-lg font-semibold text-turf-on-surface`}>
                Tournament requirements?
              </h3>
              <p className="text-sm text-turf-on-surface-variant">
                Planning a large event or league? Get in touch for bulk booking and multi-turf arrangements.
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Enquire corporate
            </button>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800 bg-slate-900/98 px-4 py-4 text-white shadow-2xl backdrop-blur"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-turf-primary/30 text-turf-primary sm:flex" aria-hidden>
              🛒
            </div>
            <div>
              <p className="font-bold">
                {selectedSlots.size} slot{selectedSlots.size === 1 ? "" : "s"} selected
              </p>
              <p className="text-sm text-slate-400">
                {dateSummary} · {timeSummary}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 md:justify-end">
            <div className="md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Total amount</p>
              <p className="text-2xl font-black text-turf-primary-container">{formatPrice(total, model.currency)}</p>
            </div>
            <button
              type="button"
              className={`${lexendClassName} shrink-0 rounded-xl bg-turf-primary-container px-6 py-3.5 text-sm font-black text-turf-on-primary-container transition hover:scale-[1.02] hover:opacity-90 active:scale-95 sm:px-8 sm:py-4`}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

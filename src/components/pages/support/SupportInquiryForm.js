"use client";

import { useState } from "react";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

const subjects = [
  "General inquiry",
  "Venue partnerships",
  "Technical support",
  "Club & league accounts",
  "Billing & payments",
];

function SendIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export function SupportInquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`${lexend.className} rounded-xl border border-slate-100 bg-white p-8 shadow-turf-glow md:p-12`} role="status">
        <h2 className="mb-2 text-2xl font-semibold text-turf-on-surface">Thanks for reaching out</h2>
        <p className="text-turf-on-surface-variant">
          We have received your message. The Turffin support team will reply by email as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-bold text-turf-primary underline decoration-turf-primary/30 underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-turf-glow md:p-12">
      <h2 className={`${lexend.className} mb-8 text-2xl font-semibold text-turf-on-surface`}>Send us a message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="support-name" className={`${lexend.className} ml-1 text-sm font-semibold text-turf-on-surface-variant`}>
              Full name
            </label>
            <input
              id="support-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Rafid Hassan"
              className="w-full rounded-lg border border-slate-200 bg-turf-surface px-4 py-3 font-sans text-base text-turf-on-surface transition focus:border-turf-primary-container focus:outline-none focus:ring-4 focus:ring-turf-primary-container/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="support-email" className={`${lexend.className} ml-1 text-sm font-semibold text-turf-on-surface-variant`}>
              Email address
            </label>
            <input
              id="support-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-200 bg-turf-surface px-4 py-3 font-sans text-base text-turf-on-surface transition focus:border-turf-primary-container focus:outline-none focus:ring-4 focus:ring-turf-primary-container/10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="support-subject" className={`${lexend.className} ml-1 text-sm font-semibold text-turf-on-surface-variant`}>
            Subject
          </label>
          <select
            id="support-subject"
            name="subject"
            className="w-full appearance-none rounded-lg border border-slate-200 bg-turf-surface bg-size-[1.25rem] bg-position-[right_0.75rem_center] bg-no-repeat px-4 py-3 pr-10 font-sans text-base text-turf-on-surface transition focus:border-turf-primary-container focus:outline-none focus:ring-4 focus:ring-turf-primary-container/10"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236d7b6d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")` }}
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="support-message" className={`${lexend.className} ml-1 text-sm font-semibold text-turf-on-surface-variant`}>
            Message
          </label>
          <textarea
            id="support-message"
            name="message"
            required
            rows={5}
            placeholder="How can we help you today?"
            className="w-full rounded-lg border border-slate-200 bg-turf-surface px-4 py-3 font-sans text-base text-turf-on-surface transition focus:border-turf-primary-container focus:outline-none focus:ring-4 focus:ring-turf-primary-container/10"
          />
        </div>
        <button
          type="submit"
          className={`${lexend.className} flex w-full items-center justify-center gap-2 rounded-xl bg-turf-primary-container py-4 text-lg font-bold text-turf-on-primary-container transition hover:-translate-y-0.5 hover:shadow-turf-cta active:scale-[0.99]`}
        >
          Send inquiry
          <SendIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

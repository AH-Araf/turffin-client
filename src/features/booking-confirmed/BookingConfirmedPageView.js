import { Inter, Lexend } from "next/font/google";
import { ArrowLeft, CalendarPlus, CheckCircle2, Mail, Ticket } from "lucide-react";
import Link from "next/link";
import { buildGoogleCalendarUrl, defaultBooking } from "./defaults";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const confettiPieces = [
  { className: "left-[15%] top-[10%] rotate-0 rounded-full bg-turf-primary-container" },
  { className: "right-[8%] top-[25%] -rotate-12 bg-turf-tertiary-tint" },
  { className: "left-[4%] top-[40%] rotate-0 rounded-full bg-turf-primary-fixed" },
  { className: "right-[3%] top-[58%] rotate-45 bg-turf-secondary" },
  { className: "left-[20%] top-[78%] rotate-0 rounded-full bg-turf-primary-container" },
  { className: "left-1/2 top-[12%] -translate-x-1/2 rotate-45 bg-turf-primary" },
  { className: "right-[20%] top-[72%] rotate-0 rounded-full bg-turf-primary-container" },
];

/**
 * @param {object} props
 * @param {string} [props.bookingId]
 * @param {string} [props.dateTime]
 * @param {string} [props.venueName]
 * @param {string} [props.venueImage]
 */
export function BookingConfirmedPageView({
  bookingId = defaultBooking.id,
  dateTime = defaultBooking.dateTime,
  venueName = defaultBooking.venueName,
  venueImage = defaultBooking.venueImage,
}) {
  const idLabel = bookingId.startsWith("#") ? bookingId : `#${bookingId}`;

  const calendarHref = buildGoogleCalendarUrl({
    title: `Turffin: ${venueName}`,
    details: `Booking ${idLabel}. Manage at turffin.com`,
    bookingId: idLabel,
  });

  return (
    <div
      className={`${inter.className} relative min-h-0 flex-1 overflow-x-hidden bg-turf-surface text-turf-on-surface antialiased`}
    >
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        {confettiPieces.map((c, i) => (
          <div
            key={i}
            className={`absolute h-2 w-2 opacity-80 ${c.className}`}
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>

      <main className="relative z-10 flex min-h-[min(100vh-5rem,56rem)] items-center justify-center px-4 py-10 md:px-6 md:py-14">
        <div className="w-full max-w-xl">
          <div
            className="relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-6 text-center shadow-turf-glow md:p-8"
            style={{ boxShadow: "0 20px 40px rgba(74, 222, 128, 0.15)" }}
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-turf-primary-container/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-turf-tertiary-tint/10 blur-3xl" />

            <div className="relative z-10 mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-turf-primary-container text-turf-on-primary-container shadow-lg md:mb-5 md:h-24 md:w-24">
              <CheckCircle2 className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2} />
            </div>

            <h1
              className={`${lexend.className} text-2xl font-bold tracking-[-0.02em] text-turf-on-surface md:text-3xl`}
            >
              Booking confirmed
            </h1>
            <p className="mb-6 mt-1 text-turf-on-surface-variant md:mb-8">
              Your session is locked in. Get ready to play.
            </p>

            <div className="mb-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 md:mb-8">
              <div className="rounded-lg border border-slate-200/60 bg-turf-surface-low p-4">
                <span
                  className={`${lexend.className} mb-1 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                >
                  Booking ID
                </span>
                <p className={`${lexend.className} text-base font-bold text-turf-primary md:text-lg`}>{idLabel}</p>
              </div>
              <div className="rounded-lg border border-slate-200/60 bg-turf-surface-low p-4">
                <span
                  className={`${lexend.className} mb-1 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                >
                  Date &amp; time
                </span>
                <p className="text-sm text-turf-on-surface sm:text-base">{dateTime}</p>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200/60 bg-turf-surface-low p-4 sm:col-span-2 sm:p-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-slate-100">
                  <img
                    src={venueImage}
                    alt={`Preview: ${venueName}`}
                    className="h-full w-full object-cover"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="min-w-0 text-left">
                  <span
                    className={`${lexend.className} mb-1 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                  >
                    Venue
                  </span>
                  <p className={`${lexend.className} text-base font-semibold text-turf-on-surface`}>{venueName}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={calendarHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${lexend.className} inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-turf-primary px-6 py-3 text-sm font-bold text-turf-on-primary shadow-md transition hover:opacity-90 active:scale-[0.98]`}
              >
                <CalendarPlus className="h-4 w-4" aria-hidden />
                Add to calendar
              </a>
              <Link
                href="/dashboard/user/bookings"
                className={`${lexend.className} inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-slate-800 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 active:scale-[0.98]`}
              >
                <Ticket className="h-4 w-4" aria-hidden />
                View booking
              </Link>
            </div>

            <div className="mt-6 border-t border-slate-200/60 pt-6">
              <p className="flex items-center justify-center gap-1.5 text-sm text-turf-on-surface-variant">
                <Mail className="h-4 w-4 shrink-0 text-turf-primary" aria-hidden />
                Confirmation details have been sent to your email.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/browse-turf"
              className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant transition hover:text-turf-primary inline-flex items-center justify-center gap-1`}
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Return to browse turfs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

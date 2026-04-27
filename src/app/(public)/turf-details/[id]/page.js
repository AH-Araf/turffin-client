import { notFound } from "next/navigation";
import { Inter, Lexend } from "next/font/google";
import Link from "next/link";
import { formatPrice, getBookingTotal, getTurfById, turfs } from "@/data/turfs";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

function sportBadgeClass(badge) {
  const map = {
    football: "bg-green-100 text-turf-primary",
    basketball: "bg-blue-100 text-blue-600",
    tennis: "bg-orange-100 text-orange-600",
    cricket: "bg-emerald-100 text-emerald-600",
    badminton: "bg-purple-100 text-purple-600",
    padel: "bg-cyan-100 text-cyan-700",
  };
  return map[badge] ?? "bg-slate-100 text-slate-700";
}

export function generateStaticParams() {
  return turfs.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const turf = getTurfById(id);
  if (!turf) {
    return { title: "Turf not found | Turffin" };
  }
  return {
    title: `${turf.title} | Turffin`,
    description: turf.about.slice(0, 155),
  };
}

export default async function TurfDetailsPage({ params }) {
  const { id } = await params;
  const t = getTurfById(id);
  if (!t) {
    notFound();
  }
  const total = getBookingTotal(t);
  const c = t.booking.currency;
  const [g0, g1, g2, g3, g4] = t.gallery;
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}>
      <main className="mx-auto max-w-7xl px-4 py-4 pb-10 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="cursor-pointer hover:text-turf-primary" href="/browse-turf">
                Browse
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-400" aria-hidden>
                ›
              </span>
              {t.breadcrumb.area}
            </li>
            <li className="flex items-center gap-2 text-turf-primary">
              <span className="text-slate-400" aria-hidden>
                ›
              </span>
              <span className="font-bold">{t.title}</span>
            </li>
          </ol>
        </nav>

        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h1 className={`${lexend.className} text-3xl font-bold leading-tight tracking-[-0.02em] text-turf-on-surface md:text-4xl`}>
              {t.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-turf-primary">
                <span className="text-amber-500" aria-hidden>
                  ★
                </span>
                <span className="font-bold">{t.rating}</span>
                <span className="font-normal text-turf-on-surface-variant">({t.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-turf-on-surface-variant">
                <span aria-hidden>📍</span>
                <span className="text-sm">{t.address}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-turf-on-surface transition-colors hover:bg-turf-surface-low"
            >
              Share
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-turf-on-surface transition-colors hover:bg-turf-surface-low"
            >
              Save
            </button>
            <div className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${sportBadgeClass(t.badge)}`}>
              {t.sport}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 grid h-[280px] grid-cols-1 grid-rows-2 gap-2.5 overflow-hidden rounded-xl md:grid-cols-4 md:grid-rows-2 md:gap-3 md:h-[440px]">
              <div className="relative h-full min-h-[200px] cursor-pointer overflow-hidden rounded-xl group md:col-span-2 md:row-span-2">
                <img
                  src={g0}
                  alt={`${t.title} — main view`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/0" />
                <div className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-800">+{Math.min(12, t.reviewCount)} photos</div>
              </div>
              {[g1, g2, g3, g4].map((src, i) => (
                <div key={i} className="relative h-full min-h-[100px] cursor-pointer overflow-hidden rounded-xl group">
                  <img
                    src={src}
                    alt={`${t.title} — gallery ${i + 2}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/0" />
                </div>
              ))}
            </div>

            <section className="mb-8">
              <h2 className={`${lexend.className} mb-3 text-2xl font-bold text-turf-on-surface`}>About the venue</h2>
              <p className="leading-relaxed text-turf-on-surface-variant">{t.about}</p>
            </section>

            <section className="mb-8">
              <h2 className={`${lexend.className} mb-4 text-lg font-bold text-turf-on-surface`}>Available amenities</h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.amenities.map((a) => (
                  <li key={a.label} className="flex items-center gap-2 text-sm text-turf-on-surface">
                    <span className="text-base" aria-hidden>
                      {a.sym}
                    </span>
                    {a.label}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-turf-primary/10 bg-turf-primary/5 p-5 shadow-turf-glow md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-center gap-3 md:flex-row">
                <img
                  src={t.manager.image}
                  alt={t.manager.name}
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                />
                <div className="text-center md:text-left">
                  <h3 className={`${lexend.className} text-xl font-bold`}>Managed by {t.manager.name}</h3>
                  <p className="text-sm italic text-turf-on-surface-variant">{t.manager.role}</p>
                  <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                    {t.manager.verified && (
                      <span className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-turf-primary">
                        <span aria-hidden>✅</span> Verified Pro
                      </span>
                    )}
                    {t.manager.fastResponder && (
                      <span className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-turf-primary">
                        <span aria-hidden>⚡</span> Fast responder
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className={`${lexend.className} w-full cursor-pointer rounded-lg border-2 border-turf-primary bg-white px-5 py-2.5 text-sm font-bold text-turf-primary transition-all hover:bg-turf-primary hover:text-white md:w-auto md:shrink-0`}
              >
                Message owner
              </button>
            </section>

            <section>
              <h2 className={`${lexend.className} mb-4 text-2xl font-bold text-turf-on-surface`}>Pricing tiers</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-turf-glow">
                  <div className="mb-1 flex items-start justify-between">
                    <div>
                      <h3 className={`${lexend.className} text-lg font-bold`}>{t.dayTier.label}</h3>
                      <p className="text-sm text-turf-on-surface-variant">{t.dayTier.hours}</p>
                    </div>
                    <span className="text-amber-600" aria-hidden>
                      ◐
                    </span>
                  </div>
                  <p className="mb-3 text-2xl font-black text-turf-on-surface">
                    {formatPrice(t.dayTier.price, c)}
                    <span className=" text-sm font-normal text-turf-on-surface-variant">/ {t.dayTier.unit}</span>
                  </p>
                  <ul className="space-y-1.5 text-sm text-turf-on-surface">
                    {t.dayTier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-turf-primary" aria-hidden>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-turf-glow">
                  <div className="mb-1 flex items-start justify-between">
                    <div>
                      <h3 className={`${lexend.className} text-lg font-bold text-white`}>{t.nightTier.label}</h3>
                      <p className="text-sm text-slate-400">{t.nightTier.hours}</p>
                    </div>
                    <span className="text-indigo-300" aria-hidden>
                      🌙
                    </span>
                  </div>
                  <p className="mb-3 text-2xl font-black text-white">
                    {formatPrice(t.nightTier.price, c)}
                    <span className=" text-sm font-normal text-slate-400">/ {t.nightTier.unit}</span>
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-200">
                    {t.nightTier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-turf-primary-container" aria-hidden>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <span className="text-3xl font-black text-turf-primary">
                    {formatPrice(t.booking.startingPrice, c)}
                  </span>
                  <p className="text-sm text-turf-on-surface-variant">Starting price</p>
                </div>
                {t.booking.bestValue && (
                  <div className="rounded-full bg-turf-primary/10 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-turf-primary">
                    Best value
                  </div>
                )}
              </div>
              <div className="mb-6 space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-turf-on-surface-variant">
                    Select date
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-turf-on-surface-variant" aria-hidden>
                      📅
                    </span>
                    <input
                      readOnly
                      className="w-full rounded-lg border border-slate-200 bg-turf-surface pl-9 pr-3 py-2.5 text-sm font-medium text-turf-on-surface outline-none ring-turf-primary-container focus:ring-2"
                      value={t.booking.defaultDate}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-turf-on-surface-variant">Players</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-turf-on-surface-variant" aria-hidden>
                      👥
                    </span>
                    <select className="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-turf-surface py-2.5 pl-9 pr-3 text-sm font-medium text-turf-on-surface outline-none ring-turf-primary-container focus:ring-2" defaultValue={0}>
                      {t.booking.playerOptions.map((o, i) => (
                        <option key={o.value} value={i}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-6 space-y-2.5 text-sm">
                {t.booking.lineItems.map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-turf-on-surface-variant">
                    <span>{row.label}</span>
                    <span className="font-mono font-bold text-turf-on-surface">{formatPrice(row.amount, c)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-turf-on-surface">
                  <span className="font-bold">Total estimate</span>
                  <span className="text-lg font-black">{formatPrice(total, c)}</span>
                </div>
              </div>
              <Link
                href={`/turf-details/${t.id}/slot-availability`}
                className={`${lexend.className} mb-3 block w-full cursor-pointer rounded-xl bg-turf-primary-container py-3.5 text-center text-lg font-black text-turf-on-primary-container transition hover:opacity-90 active:scale-95`}
              >
                Check availability
              </Link>
              <p className="text-center text-[10px] font-bold uppercase tracking-widest text-turf-on-surface-variant">
                No payment required yet · Instant confirmation
              </p>
            </div>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-turf-surface-low p-4 text-center">
              <p className="text-xs leading-relaxed text-turf-on-surface-variant">
                <span className="mr-1 text-turf-primary" aria-hidden>
                  ✓
                </span>
                This venue is a <span className="font-bold text-turf-on-surface">Turffin certified platinum</span> partner, meeting our highest standards
                for safety, maintenance, and quality.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <h2 className={`${lexend.className} mb-3 text-2xl font-bold text-turf-on-surface`}>Location</h2>
          <div className="relative h-[min(50vh,400px)] min-h-[280px] overflow-hidden rounded-xl border border-slate-200">
            <img
              src={t.mapImage}
              alt="Map of venue area"
              className="h-full w-full object-cover opacity-80 filter-[grayscale(1)_contrast(1.1)]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-3 animate-ping rounded-full bg-turf-primary/25" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white p-1 shadow-lg" aria-hidden>
                  <span className="text-2xl text-turf-primary">📍</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 max-w-sm rounded-lg bg-white/95 p-3 text-left shadow-lg backdrop-blur sm:left-4">
              <h3 className="font-bold text-turf-on-surface">Getting there</h3>
              <p className="mt-1 text-xs text-turf-on-surface-variant">{t.gettingThere}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

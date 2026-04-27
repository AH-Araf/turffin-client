import { Inter, Lexend } from "next/font/google";
import Link from "next/link";
import { getBrowseTurfs } from "@/data/turfs";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const sportTypes = [
  { id: "football", label: "Football", defaultChecked: true },
  { id: "cricket", label: "Cricket" },
  { id: "basketball", label: "Basketball" },
  { id: "tennis", label: "Tennis" },
];

const amenityOptions = [
  { id: "changing", label: "Changing Rooms" },
  { id: "flood", label: "Floodlights" },
  { id: "parking", label: "Parking" },
  { id: "cafe", label: "Cafe" },
];

const turfs = getBrowseTurfs();

function sportBadgeClass(badge) {
  const map = {
    football: "bg-green-100 text-turf-primary",
    basketball: "bg-blue-100 text-blue-600",
    tennis: "bg-orange-100 text-orange-600",
    cricket: "bg-emerald-100 text-emerald-600",
    badminton: "bg-purple-100 text-purple-600",
  };
  return map[badge] ?? "bg-slate-100 text-slate-700";
}

export const metadata = {
  title: "Browse Turfs | Turffin",
  description: "Find and book the highest-rated turfs in Bangladesh.",
};

export default function BrowseTurfPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}>
      <main className="mx-auto max-w-7xl px-4 pb-10 pt-3 md:px-6">
        <div className="mb-7">
          <h1 className={`${lexend.className} mb-1.5 text-3xl font-bold leading-tight tracking-[-0.02em] text-turf-on-surface md:text-4xl`}>
            Elite Sporting Grounds
          </h1>
          <p className="text-base text-turf-on-surface-variant">Find and book the highest-rated turfs in Bangladesh.</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="w-full shrink-0 lg:w-72">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className={`${lexend.className} text-xl font-semibold`}>Filters</h2>
                <button
                  type="button"
                  className="cursor-pointer text-xs font-semibold uppercase tracking-widest text-turf-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="mb-6">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant">Sport Type</span>
                <div className="space-y-3">
                  {sportTypes.map((s) => (
                    <label
                      key={s.id}
                      className="group flex cursor-pointer items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={s.defaultChecked}
                        className="h-5 w-5 cursor-pointer rounded border-slate-300 text-turf-primary accent-turf-primary-container focus:ring-turf-primary-container"
                      />
                      <span className="text-sm transition-colors group-hover:text-turf-primary">{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant">Price Range (Hourly)</span>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  defaultValue="2500"
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-turf-primary-container"
                />
                <div className="mt-2 flex justify-between text-sm text-turf-on-surface-variant">
                  <span>৳500</span>
                  <span>৳5000+</span>
                </div>
              </div>

              <div>
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant">Amenities</span>
                <div className="space-y-3">
                  {amenityOptions.map((a) => (
                    <label key={a.id} className="group flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer rounded border-slate-300 text-turf-primary accent-turf-primary-container focus:ring-turf-primary-container"
                      />
                      <span className="text-sm transition-colors group-hover:text-turf-primary">{a.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-sm text-turf-on-surface-variant">
                <span className="font-bold text-turf-on-surface">24</span> venues found in Dhaka and Chattogram
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant">Sort by:</label>
                <select className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-turf-primary-container">
                  <option>Highest Rated</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {turfs.map((t) => (
                <article
                  key={t.id}
                  className="group cursor-default overflow-hidden rounded-xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-turf-card-lift"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-turf-on-yellow">
                      {t.price}
                    </div>
                    <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm shadow-sm backdrop-blur-sm">
                      <span className="text-yellow-500" aria-hidden>
                        ★
                      </span>
                      <span className="text-sm font-medium text-slate-800">{t.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className={`${lexend.className} text-xl font-semibold text-turf-on-surface`}>{t.title}</h3>
                      <div className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${sportBadgeClass(t.badge)}`}>
                        {t.sport}
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-1 text-sm text-turf-on-surface-variant">
                      <span aria-hidden>📍</span>
                      <span>{t.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1">
                        {t.previewAmenities.map((a) => (
                          <span
                            key={a.label}
                            className="rounded-full bg-slate-100 p-1.5 text-sm"
                            title={a.label}
                            aria-label={a.label}
                          >
                            {a.sym}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/turf-details/${t.id}`}
                        className={`${lexend.className} inline-flex cursor-pointer rounded-lg bg-turf-primary-container px-5 py-2 text-sm font-bold text-turf-on-primary-container transition-transform hover:opacity-90 active:scale-95`}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-turf-on-surface-variant transition-colors hover:bg-slate-100"
                aria-label="Previous page"
              >
                ‹
              </button>
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-turf-primary-container font-bold text-turf-on-primary-container transition-transform hover:opacity-90 active:scale-95"
              >
                1
              </button>
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-turf-on-surface-variant transition-colors hover:bg-slate-100"
              >
                2
              </button>
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-turf-on-surface-variant transition-colors hover:bg-slate-100"
              >
                3
              </button>
              <span className="px-2 text-sm text-turf-on-surface-variant">…</span>
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-turf-on-surface-variant transition-colors hover:bg-slate-100"
              >
                8
              </button>
              <button
                type="button"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-turf-on-surface-variant transition-colors hover:bg-slate-100"
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

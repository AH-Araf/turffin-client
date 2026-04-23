import { Inter, Lexend } from "next/font/google";
import Link from "next/link";
import { formatPrice } from "@/data/turfs";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const c = "৳";

export const metadata = {
  title: "Memberships & pricing | Turffin",
  description: "Compare Basic, Pro, and Elite plans. Premium venues, flexible booking, and member benefits across Bangladesh.",
};

const plans = [
  {
    name: "Basic",
    blurb: "For the casual athlete who plays on their own schedule.",
    priceDisplay: "Pay as you go",
    priceIsCustom: true,
    features: [
      { ok: true, text: "Standard field rates" },
      { ok: true, text: "24-hour advance booking" },
      { ok: false, text: "No priority scheduling" },
    ],
    cta: "Get started",
    ctaStyle: "outline",
  },
  {
    name: "Pro",
    blurb: "Optimized for weekly matches and dedicated teams.",
    priceAmount: 4900,
    pricePeriod: "/month",
    featured: true,
    features: [
      { ok: true, text: "15% discount on all bookings" },
      { ok: true, text: "7-day advance booking window" },
      { ok: true, text: "Free lighting for evening slots" },
      { ok: true, text: "Guest passes (2 per month)" },
    ],
    cta: "Upgrade to Pro",
    ctaStyle: "primary",
  },
  {
    name: "Elite",
    blurb: "Bulk booking solutions for leagues and corporations.",
    priceAmount: 19900,
    pricePeriod: "/month",
    features: [
      { ok: true, text: "30% bulk booking discount" },
      { ok: true, text: "Concierge scheduling service" },
      { ok: true, text: "Custom branding for events" },
      { ok: true, text: "Unlimited lighting access" },
    ],
    cta: "Contact sales",
    ctaStyle: "outlineDark",
  },
];

const comparisonRows = [
  { feature: "Booking window", basic: "24 hours", pro: "7 days", elite: "30 days" },
  { feature: "Hourly discount", basic: "—", pro: "15%", elite: "30%" },
  { feature: "Locker access", basic: "Standard", pro: "Premium", elite: "Private suite" },
  { feature: "Cancellation policy", basic: "48h notice", pro: "12h notice", elite: "Instant credit" },
  { feature: "Multi-venue access", basic: "—", pro: "yes", elite: "yes" },
  { feature: "Data analytics", basic: "—", pro: "yes", elite: "yes" },
];

const faqs = [
  {
    q: "Can I cancel my monthly subscription anytime?",
    a: "Yes, Pro and Elite memberships are billed monthly with no long-term contracts. You can cancel through your dashboard; benefits stay active until the end of the billing cycle.",
  },
  {
    q: 'What counts as a "bulk booking" for Elite members?',
    a: "Bulk bookings apply to four or more slots at once, or recurring weekly bookings for full leagues. Elite members get a dedicated account manager for these schedules.",
  },
  {
    q: "Do memberships apply to all Turffin locations?",
    a: "Yes. Pro and Elite status is valid across our network of partner venues in Dhaka, Chattogram, and beyond.",
  },
];

const ctaBg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgeF6a_xFpbm-uUQiMaJsrVZay1CyiIrxs3455UC4fI_4W7dLeaHBzVO7HG_Hz8N9wzJ1hW1ewi_1DbnmMdppCzUQsfYS4a1_E3k-eLXDy-wZ0kBkm6IgU7fLdjLmgTq9xwk4LS6GAppP04BaH37RCCLh9Bm8ro0-f5J_S9XKxjxw8muIvE_VEoFZqEGmmVkdmj3gIBmw-wUC6K-O0WW-c00PApIYDMFGuzxcXw03Eui_vlUpQG8B8BqwSZcJtGFptr-DZW-SVvA";

function CellValue({ value, highlight }) {
  if (value === "—") {
    return <span className="text-turf-on-surface-variant">—</span>;
  }
  if (value === "yes") {
    return <span className="text-turf-primary" aria-label="Yes">✓</span>;
  }
  const isPro = highlight === "pro";
  return <span className={isPro ? "font-bold text-turf-primary" : "text-turf-on-surface"}>{value}</span>;
}

export default function PricingPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}>
      <main>
        <section className="mx-auto max-w-4xl px-6 pb-10 pt-6 text-center">
          <p className={`${lexend.className} mb-3 text-xs font-bold uppercase tracking-[0.2em] text-turf-primary`}>
            Pricing plans
          </p>
          <h1 className={`${lexend.className} mb-4 text-4xl font-bold leading-tight tracking-[-0.02em] text-turf-on-surface md:text-5xl`}>
            Elite performance, tailored to your game.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-turf-on-surface-variant">
            Choose the perfect membership to unlock premium venues, simplified booking, and exclusive athlete benefits.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={[
                  "relative flex flex-col rounded-xl border p-8 shadow-turf-glow transition duration-300 hover:-translate-y-1 hover:shadow-turf-card-lift",
                  p.featured
                    ? "border-4 border-turf-primary-container bg-slate-900 text-white md:mt-0"
                    : "border-slate-200 bg-white",
                ].join(" ")}
              >
                {p.featured && (
                  <div
                    className={`${lexend.className} absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-turf-primary-container px-4 py-1 text-xs font-bold uppercase tracking-widest text-turf-on-primary-container`}
                  >
                    Most popular
                  </div>
                )}
                <div className="mb-8">
                  <h2 className={`${lexend.className} mb-2 text-2xl font-bold ${p.featured ? "text-white" : "text-turf-on-surface"}`}>
                    {p.name}
                  </h2>
                  <p className={`text-sm ${p.featured ? "text-slate-300" : "text-turf-on-surface-variant"}`}>{p.blurb}</p>
                </div>
                <div className="mb-8">
                  {p.priceIsCustom ? (
                    <p className={`${lexend.className} text-3xl font-bold sm:text-4xl ${p.featured ? "text-white" : "text-turf-on-surface"}`}>
                      {p.priceDisplay}
                    </p>
                  ) : (
                    <p>
                      <span className={`${lexend.className} text-3xl font-bold sm:text-4xl ${p.featured ? "text-white" : "text-turf-on-surface"}`}>
                        {formatPrice(p.priceAmount, c)}
                      </span>
                      <span className={p.featured ? "text-slate-400" : "text-turf-on-surface-variant"}> {p.pricePeriod}</span>
                    </p>
                  )}
                </div>
                <ul className="mb-8 flex grow flex-col gap-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2">
                      {f.ok ? (
                        <span className="mt-0.5 text-turf-primary" aria-hidden>
                          ✓
                        </span>
                      ) : (
                        <span className="mt-0.5 text-slate-400" aria-hidden>
                          ✕
                        </span>
                      )}
                      <span className={!f.ok ? "text-slate-400" : p.featured ? "text-slate-100" : "text-turf-on-surface"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                {p.ctaStyle === "primary" && (
                  <button
                    type="button"
                    className={`${lexend.className} mt-auto w-full cursor-pointer rounded-lg bg-turf-primary-container py-3.5 text-sm font-bold text-turf-on-primary-container transition hover:opacity-90 active:scale-95`}
                  >
                    {p.cta}
                  </button>
                )}
                {(p.ctaStyle === "outline" || p.ctaStyle === "outlineDark") && (
                  <button
                    type="button"
                    className={`${lexend.className} mt-auto w-full cursor-pointer rounded-lg border-2 border-slate-800 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-800 hover:text-white active:scale-95`}
                  >
                    {p.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-turf-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <h2 className={`${lexend.className} text-2xl font-bold text-turf-on-surface md:text-3xl`}>
                Compare all features
              </h2>
              <p className="mt-2 text-turf-on-surface-variant">A detailed breakdown of every membership perk.</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-4 text-left font-semibold">Feature</th>
                    <th className="px-4 py-4 text-center font-semibold">Basic</th>
                    <th className="px-4 py-4 text-center font-semibold text-turf-primary">Pro</th>
                    <th className="px-4 py-4 text-center font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-slate-100 transition-colors last:border-0 hover:bg-turf-surface"
                    >
                      <td className="px-4 py-3 font-semibold text-turf-on-surface">{row.feature}</td>
                      <td className="px-4 py-3 text-center text-turf-on-surface">
                        <CellValue value={row.basic} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.pro} highlight="pro" />
                      </td>
                      <td className="px-4 py-3 text-center text-turf-on-surface">
                        <CellValue value={row.elite} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10 text-center">
              <h2 className={`${lexend.className} text-2xl font-bold text-turf-on-surface md:text-3xl`}>
                Frequently asked questions
              </h2>
              <p className="mt-2 text-turf-on-surface-variant">Everything you need to know about Turffin memberships.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className={`${lexend.className} mb-2 text-base font-semibold text-turf-on-surface`}>{f.q}</h3>
                  <p className="text-sm leading-relaxed text-turf-on-surface-variant">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl bg-slate-900 p-10 text-center sm:p-12">
            <div className="absolute inset-0">
              <img
                src={ctaBg}
                alt=""
                className="h-full w-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <h2 className={`${lexend.className} mb-3 text-2xl font-bold text-white md:text-3xl`}>
                Ready to take the pitch?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-slate-300">
                Join thousands of athletes who trust Turffin for their training and matches in Bangladesh.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/browse-turf"
                  className={`${lexend.className} inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-turf-primary-container px-8 py-3 text-sm font-bold text-turf-on-primary-container transition hover:scale-[1.02] hover:opacity-90 sm:w-auto`}
                >
                  Start with venues
                </Link>
                <button
                  type="button"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

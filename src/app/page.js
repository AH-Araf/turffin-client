import { Inter, Lexend } from "next/font/google";
import Link from "next/link";
import { getHomeVenues } from "@/data/turfs";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const venues = getHomeVenues();

const steps = [
  {
    emoji: "🔎",
    title: "1. Search",
    text: "Filter by area, sport, and preferred time slot to find available turfs in Dhaka, Chattogram, and beyond.",
  },
  {
    emoji: "📲",
    title: "2. Book",
    text: "Select your slot, choose add-ons like equipment rental, and pay securely in seconds.",
  },
  {
    emoji: "🏃",
    title: "3. Play",
    text: "Receive your digital pass, head to the field, and start your session without any hassle.",
  },
];

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface`}>
      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-10">
          <div className="absolute right-[-10%] top-[-20%] h-96 w-96 rounded-full bg-turf-primary-container/20 blur-[100px]" />
          <div className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-turf-tertiary-tint/20 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className={`${lexend.className} mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-turf-primary`}>
                Elite Sports Management
              </p>
              <h1 className={`${lexend.className} mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight text-slate-900`}>
                Find Your <span className="italic text-turf-primary">Perfect Field</span> in Seconds
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-turf-secondary">
                Premium turfs, effortless booking, and elite management for teams who play to win. Access the best
                athletic facilities across Bangladesh.
              </p>

              <div className="mx-auto mb-12 flex w-full max-w-4xl flex-col gap-2 rounded-xl bg-white p-2 shadow-turf-search md:flex-row">
                <div className="flex flex-1 items-center border-b border-slate-100 px-4 py-3 md:border-b-0 md:border-r">
                  <span className="mr-3 text-slate-400">📍</span>
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="Area, e.g. Dhanmondi, Banani" />
                </div>
                <div className="flex flex-1 items-center border-b border-slate-100 px-4 py-3 md:border-b-0 md:border-r">
                  <span className="mr-3 text-slate-400">⚽</span>
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>Football (Soccer)</option>
                    <option>Basketball</option>
                    <option>Padel</option>
                    <option>Cricket</option>
                    <option>Tennis</option>
                  </select>
                </div>
                <div className="flex flex-1 items-center px-4 py-3">
                  <span className="mr-3 text-slate-400">📅</span>
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="Pick a date" />
                </div>
                <button
                  className={`${lexend.className} w-full cursor-pointer rounded-lg bg-turf-primary-container px-8 py-4 font-bold text-turf-on-primary transition-all hover:opacity-90 active:scale-95 md:w-auto`}
                >
                  Explore
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 md:gap-16">
                <p>
                  <span className={`${lexend.className} mr-1 text-xl font-bold text-slate-900`}>150+</span>Turf Venues
                </p>
                <p>
                  <span className={`${lexend.className} mr-1 text-xl font-bold text-slate-900`}>45k</span>Monthly Players
                </p>
                <p>
                  <span className={`${lexend.className} mr-1 text-xl font-bold text-slate-900`}>4.9/5</span>User Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className={`${lexend.className} mb-2 text-3xl font-semibold text-slate-900`}>Featured Venues</h2>
                <p className="text-turf-secondary">Hand-picked premium turfs for high-performance play.</p>
              </div>
              <a className={`${lexend.className} hidden cursor-pointer items-center gap-2 font-semibold text-turf-primary transition-colors hover:text-turf-primary-pressed md:flex`}>
                View all fields →
              </a>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {venues.map((venue) => (
                <article
                  key={venue.id}
                  className="group overflow-hidden rounded-xl border border-slate-50 bg-white shadow-turf-glow transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className={`${lexend.className} absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-turf-primary`}>
                      {venue.price}
                    </span>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="rounded bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {venue.tags[0]}
                      </span>
                      <span className="rounded bg-turf-primary-container px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-turf-on-primary">
                        {venue.tags[1]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className={`${lexend.className} text-xl font-semibold text-slate-900`}>{venue.title}</h3>
                      <p className="text-sm text-slate-700">⭐ {venue.rating}</p>
                    </div>
                    <p className="mb-6 text-sm text-slate-500">📍 {venue.location}</p>
                    <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                      <p className="text-sm font-semibold text-slate-500">{venue.extra}</p>
                      <Link
                        href={`/turf-details/${venue.id}`}
                        className={`${lexend.className} inline-flex cursor-pointer rounded bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800 active:scale-95`}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className={`${lexend.className} mb-4 text-3xl font-semibold text-slate-900`}>Book in 3 Simple Steps</h2>
              <p className="mx-auto max-w-xl text-turf-secondary">
                Our streamlined platform handles the logistics so you can focus on the game.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-turf-primary-container/10 text-3xl">
                    {step.emoji}
                  </div>
                  <h3 className={`${lexend.className} mb-3 text-xl font-bold`}>{step.title}</h3>
                  <p className="text-sm text-turf-secondary">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-turf-surface-low px-6 py-14">
          <div className="mx-auto grid h-auto max-w-7xl grid-cols-1 gap-4 md:h-[560px] md:grid-cols-4 md:grid-rows-2">
            <article className="group relative overflow-hidden rounded-2xl bg-slate-900 p-10 md:col-span-2 md:row-span-2">
              <p className={`${lexend.className} inline-block rounded-full border border-turf-primary-container/30 bg-turf-primary-container/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-turf-primary-container`}>
                For Organizations
              </p>
              <h3 className={`${lexend.className} mt-6 max-w-md text-4xl font-bold text-white`}>Advanced Venue Management</h3>
              <p className="mt-4 max-w-sm text-slate-400">
                Manage bookings, analyze usage patterns, and handle payments with our elite dashboard for stadium owners.
              </p>
              <button
                className={`${lexend.className} mt-8 cursor-pointer rounded-lg bg-turf-primary-container px-8 py-3 font-bold text-turf-on-primary transition-all hover:opacity-90 active:scale-95`}
              >
                Go Pro
              </button>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYL7TW6DzjEMwHSiLBpZKoFDdbK2gUXy6Vo3vq6gIncQvZK8UFApKDgAjB6Yr-C6WUFM_IlicL8izXZcfmiJZMNt22BXQs0jNC8TXkJrzgczg2uQ8t7QAtL06p0ftjqvqbGhXa8IDPJQ2UAyBAp1PPXU6m-QUj-TMPtmtH1bLPN-H14Os5MEumdUbS1sID5IDQNcLf6Z5EMSSFfjKYsFUBbhioaGxOByXbHTEzG49pSGxHuAfDiMRZuoYth-6xiWDzoDEP2Fzqwg"
                alt="Dashboard Analytics"
                className="absolute -bottom-14 -right-14 w-80 opacity-35 transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
              />
            </article>
            <article className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:col-span-2">
              <div className="max-w-[60%]">
                <h4 className={`${lexend.className} mb-2 text-xl font-bold text-slate-900`}>Instant Team Invites</h4>
                <p className="text-sm text-slate-500">Split the bill and invite your teammates automatically with one click.</p>
              </div>
              <div className="rounded-xl bg-turf-primary-container/10 p-4 text-2xl text-turf-primary">👥</div>
            </article>
            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 text-2xl text-turf-primary">✅</div>
              <h4 className={`${lexend.className} text-lg font-bold text-slate-900`}>Verified Quality</h4>
              <p className="text-xs text-slate-500">All fields are manually vetted by Turffin agents.</p>
            </article>
            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 text-2xl text-turf-primary">🎧</div>
              <h4 className={`${lexend.className} text-lg font-bold text-slate-900`}>24/7 Support</h4>
              <p className="text-xs text-slate-500">Our concierge team is always ready to assist.</p>
            </article>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[40px] bg-turf-primary p-14 text-turf-on-primary shadow-turf-cta">
              <h2 className={`${lexend.className} mb-6 text-4xl font-bold`}>Ready to Take the Field?</h2>
              <p className="mb-10 text-lg text-turf-primary-fixed">
                Join 50,000+ athletes booking their daily sessions through Turffin.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  className={`${lexend.className} cursor-pointer rounded-xl bg-white px-10 py-4 font-bold text-turf-primary transition-colors hover:bg-slate-50 active:scale-95`}
                >
                  Browse All Venues
                </button>
                <button
                  className={`${lexend.className} cursor-pointer rounded-xl bg-turf-primary-container px-10 py-4 font-bold text-turf-on-primary transition-all hover:opacity-90 active:scale-95`}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

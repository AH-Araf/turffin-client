import { Inter, Lexend } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "About us | Turffin",
  description:
    "Our mission, story, and team. Turffin connects athletes and venues with professional-grade sports surfaces across Bangladesh.",
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjLHr41Eia3Z8m_ipsrn_Fa3jH_0ukHPP_PvQX87_VjCxNzphfhOa5UdH0bwZeLpWEJ0ZBvawmC3CcAdaJEFS4UvGKUFKNZFZp9UZZ9EpjDMrvpDiocrHDQhwHPFeWO3Q1xRN4RFIaKPqfVIls3Cnlgeu0Ceu7x00r64Jm2oZj9DDqcAvUY6IPujf5gEgv5LtEiba0szg4DoYqkxKH7WZiStHrxYVdxi7YNJAcpKsq5LR1aWNJqYgrD82cak1BllB-gLTY8rYnrA";

const bentoImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAi51Wa_4JTaFVPyFbB5Hd6qTyv1_2g_QheeBOAzK3a7J2xzYcnE7bCxh6QnQE4ix4wViKsCBJK_yb8nEAk4ilaklzhTZ--OhATrXsezsWEAeMsF6WK6fXdvE9AIS-eTgCpRNG5w0ZdX33tF-HHKSHBLMHjP56OELhQBW2KOM0jmW_UtKazfsxvl3o_lqJ4ZXyiYk3qIsPMRlnXi6PwtzK9E6sourowoUVzjL1SFqlQBvbWJUmPZ7i2hPXP1CueBfbBb0jylBsy_A";

const team = [
  {
    name: "Marcus Sterling",
    role: "Founder & CEO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxT9IO-fLuoUvt89XBo-Zs7B4h7cxD8rsjQ4PgDQDT9x2IZN3jjGJQPXgESa3fRVsRq2j2Maw3jVgDn3Og58n6-URa66y3Yxf2RKRYxGRsa7IOY6qEQAiadwNCQDRD7p-YP1DTbAdDGFZ-bHR1zySYbzzq07fTGodimy0rfY70OwOe6AuUjm5lBJoRBSbOOfBepi-nVfKrhFse-lzYsBJZKmkKRDsVhIuOPUXl_wgTIt5rSt4vWMW6LrsgjpCQIeifFtCIn68X6Q",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGCg0331K0s-T8gqYb1ynLdL5PO2TRBF1usuv-aceDLrvnlrD5gS9kyerkUHNjXcfUQDLjhYQTC_z0Gen-qNTpNaoXKTHhQFvYS0HvrxrKCbJfu-_7LQRplPRHsnXHmaewVdWiMSF1uSuv1cNBJKeBL7PdoyRVvZfAZvdNqfZOrHFP0TYN17RMBf4Wvt52MwSsgq6gYGJtNybMh08lVyxXjNs0NrPyrV7kcks5o4_h-t9gMQ0LY9pFwgNUktlxMLxgw7FKWQd_tQ",
  },
  {
    name: "David Chen",
    role: "Chief technology officer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxT9IO-fLuoUvt89XBo-Zs7B4h7cxD8rsjQ4PgDQDT9x2IZN3jjGJQPXgESa3fRVsRq2j2Maw3jVgDn3Og58n6-URa66y3Yxf2RKRYxGRsa7IOY6qEQAiadwNCQDRD7p-YP1DTbAdDGFZ-bHR1zySYbzzq07fTGodimy0rfY70OwOe6AuUjm5lBJoRBSbOOfBepi-nVfKrhFse-lzYsBJZKmkKRDsVhIuOPUXl_wgTIt5rSt4vWMW6LrsgjpCQIeifFtCIn68X6Q",
  },
  {
    name: "Sarah Jenkins",
    role: "Product design lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlwXmV0i07DhltSwut7K34gOXiaWzVEYQIoHcFB7E_z2qmNejDC7LMSlY8iM3x0I80g8igG3-hu1B4PGcwP08j8L0RWXpoji7ZTv7KJUnURXloxGXlCc32DKHNx6Hd0RBBa_dL1DhiBHMGtMy8cmYon7S47IDXqd1nPWw8ZwHiFo1lOHGwzz95dnHmo4w5eASwjJ5Ion2aftGN5Lm7lz5i3vRylsp0OV6iCUykVT_-ihK81EvI7cWGll6pYoiZzG9gwDxowT3Skw",
  },
];

export default function AboutUsPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}>
      <main>
        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <span
                className={`${lexend.className} mb-6 inline-block rounded-full border border-turf-primary/20 bg-turf-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-turf-primary`}
              >
                Our mission
              </span>
              <h1 className={`${lexend.className} mb-6 text-4xl font-bold leading-tight tracking-[-0.02em] md:text-5xl`}>
                Democratizing access to professional-grade surfaces.
              </h1>
              <p className="mb-8 max-w-xl text-lg text-turf-on-surface-variant">
                Founded in 2021, Turffin began with a simple idea: the hardest part of organized sports should not be
                finding a place to play. We are the link between great facilities and the athletes, schools, and clubs
                that use them—starting in Bangladesh and growing with every booking.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:partners@turffin.example"
                  className={`${lexend.className} inline-flex cursor-pointer items-center justify-center rounded-xl bg-turf-primary-container px-6 py-3.5 text-sm font-bold text-turf-on-primary transition hover:opacity-90 active:scale-95 sm:px-8 sm:py-4`}
                >
                  Partner with us
                </a>
                <Link
                  href="/pricing"
                  className={`${lexend.className} inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-turf-on-surface transition hover:border-turf-primary hover:text-turf-primary sm:px-8 sm:py-4`}
                >
                  View memberships
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img src={heroImage} alt="Synthetic turf with field markings" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-2xl border border-slate-100 bg-white p-6 shadow-xl md:block">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-turf-primary/15">
                    <span className="text-xl text-turf-primary" aria-hidden>
                      ✓
                    </span>
                  </div>
                  <span className={`${lexend.className} font-semibold`}>Elite quality</span>
                </div>
                <p className="text-sm text-turf-on-surface-variant">
                  Every listed turf follows our 12-point quality checks before it goes live on Turffin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { n: "150+", l: "Venues listed" },
                { n: "45k+", l: "Sessions booked" },
                { n: "24/7", l: "Support coverage" },
                { n: "2+", l: "Major city hubs" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className={`${lexend.className} text-3xl font-bold text-turf-primary-container md:text-4xl`}>
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-turf-surface-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl text-center md:mx-auto md:mb-16">
              <h2 className={`${lexend.className} mb-3 text-2xl font-bold md:text-3xl`}>The Turffin journey</h2>
              <p className="text-turf-on-surface-variant">
                From a small team in Dhaka to a growing network of partner venues in Bangladesh and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-2">
                <div className="relative z-10">
                  <span className={`${lexend.className} text-xl font-bold text-turf-primary`}>2021</span>
                  <h3 className={`${lexend.className} mt-3 mb-3 text-lg font-semibold`}>The first bookings</h3>
                  <p className="text-turf-on-surface-variant">
                    We went live with a handful of fields in Dhaka. The first same-night booking on Turffin made it
                    clear athletes were ready for simpler scheduling.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10 transition-opacity group-hover:opacity-20" aria-hidden>
                  <span className="text-[10rem] leading-none">🌱</span>
                </div>
              </div>
              <div className="flex flex-col justify-end rounded-3xl bg-turf-primary-container p-8 text-turf-on-primary-container">
                <span className={`${lexend.className} text-xl font-bold`}>2022</span>
                <h3 className={`${lexend.className} mt-3 text-lg font-semibold`}>Expansion</h3>
                <p className="mt-1 text-sm opacity-95">
                  Reached Chattogram, launched tools for venue managers, and doubled down on same-day and advance
                  bookings.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-8 text-white">
                <span className={`${lexend.className} text-xl font-bold text-turf-primary-container`}>2023</span>
                <h3 className={`${lexend.className} mt-3 text-lg font-semibold`}>Elite series</h3>
                <p className="mt-1 text-sm text-slate-400">
                  League and academy partners joined—bringing stadium-style turf access to more teams and schools.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-2 md:flex-row">
                <div className="min-w-0 flex-1">
                  <span className={`${lexend.className} text-xl font-bold text-turf-primary`}>2024 and beyond</span>
                  <h3 className={`${lexend.className} mt-3 mb-3 text-lg font-semibold`}>Regional reach</h3>
                  <p className="text-turf-on-surface-variant">
                    We are not only filling slots; we are building the booking layer for grassroots and semi-pro sport
                    across the region, with more cities and more turf partners every season.
                  </p>
                </div>
                <div className="h-40 w-full shrink-0 overflow-hidden rounded-2xl md:h-auto md:w-64">
                  <img src={bentoImage} alt="Indoor athletic facility" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:mb-16 md:flex-row">
              <div className="max-w-2xl">
                <h2 className={`${lexend.className} mb-3 text-2xl font-bold md:text-3xl`}>The team behind the turf</h2>
                <p className="text-turf-on-surface-variant">
                  Athletes, operators, and engineers working together to keep every session on schedule.
                </p>
              </div>
              <a
                href="mailto:careers@turffin.example"
                className="flex items-center gap-1 text-sm font-bold text-turf-primary transition hover:translate-x-0.5"
              >
                Join our team <span aria-hidden>→</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="group">
                  <div className="relative mb-4 aspect-3/4 overflow-hidden rounded-2xl sm:mb-5">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover transition duration-500 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-2 transition group-hover:translate-y-0">
                      <div className="flex justify-center gap-3 rounded-xl border border-slate-100 bg-white/95 p-3 text-sm text-slate-500 backdrop-blur">
                        <span className="cursor-not-allowed opacity-50" title="Email (coming soon)">
                          @
                        </span>
                        <span className="cursor-not-allowed opacity-50" title="Share (coming soon)">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className={`${lexend.className} text-base font-semibold`}>{m.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-turf-primary">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-slate-950 p-10 md:p-20">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-turf-primary/20 blur-[100px]" aria-hidden />
            <div
              className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"
              aria-hidden
            />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className={`${lexend.className} mb-4 text-3xl font-bold text-white md:text-4xl`}>
                Ready to play on the best?
              </h2>
              <p className="mb-10 text-lg text-slate-400">
                Join players and venue partners on Turffin. Simple booking, fair pricing in taka, and support when you
                need it.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/browse-turf"
                  className={`${lexend.className} inline-flex cursor-pointer items-center justify-center rounded-xl bg-turf-primary-container px-8 py-4 text-base font-bold text-turf-on-primary-container transition hover:scale-[1.02] hover:opacity-90`}
                >
                  Book a turf
                </Link>
                <a
                  href="mailto:venues@turffin.example"
                  className={`${lexend.className} inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20`}
                >
                  List your venue
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Link from "next/link";
import { Inter, Lexend } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const stadiumImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAjcj9sOXYz0Znpx7MWTYnBjPX5Z9LE8gYYJ-2AX8qwqxJD9jouYpeL0H6l05ZMPU_Ss0TX6kKsvUc_arAmx2TZ9v0sSwjwMg012VaG-RyXkDaoLHBKU5o0AtxKqIw0iEvQQaW0Egc4XPrCh7FGqtqSyaK2SHu2RgKJi-PgN5qPMEMciUY8G_GdQzOZVAxQKx47nkC5_L4ormNNtCCO3K5JQ-JHMnIq1f_LMqwDbYmyKKSk5N58rBWeZ-hzknx9UVB30kPsdYyfgg";

export function NotFoundPageView() {
  return (
    <div className={`${inter.className} fixed inset-0 z-70 overflow-hidden bg-turf-surface text-turf-on-surface`}>
      <main className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={stadiumImage}
            alt="Floodlit professional football stadium"
            className="h-full w-full object-cover"
            width={2560}
            height={2048}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/65 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md">
            <span className="text-4xl text-turf-primary-container" aria-hidden>
              ⚽
            </span>
          </div>

          <div className="mb-4">
            <span
              className={`${lexend.className} inline-flex rounded-full border border-turf-primary-container/25 bg-turf-primary-container/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-turf-primary-container`}
            >
              Error 404
            </span>
          </div>

          <h1
            className={`${lexend.className} mb-6 text-5xl font-bold leading-[0.9] tracking-tighter text-white drop-shadow-2xl md:text-8xl`}
          >
            Out of <span className="text-turf-primary-container">Bounds!</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base text-white/80 md:text-xl">
            The whistle has blown, and this page is off the pitch. Let&apos;s get you back to active play.
          </p>

          <Button asChild size="lg" variant="accent" className={`${lexend.className} h-12 px-8 text-base shadow-turf-glow`}>
            <Link href="/">
              <span aria-hidden>🏠</span>
              Return to home
            </Link>
          </Button>

          <div className="absolute -bottom-24 left-1/2 w-full -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <p className={`${lexend.className} text-xs uppercase tracking-widest text-white/45`}>Turffin athletics</p>
              <div className="h-1 w-12 rounded-full bg-turf-primary-container/35" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-16 top-20 h-96 w-96 rounded-full bg-turf-primary-container/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-turf-primary-container/10 blur-[120px]" />
      </main>
    </div>
  );
}

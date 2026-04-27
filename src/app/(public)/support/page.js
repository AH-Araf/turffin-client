import { Inter, Lexend } from "next/font/google";
import Link from "next/link";
import { SupportInquiryForm } from "@/components/pages/support/SupportInquiryForm";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVx4IO9Bky2R_sJQsAmVAlKQOafK4twbXmB3TsLKEg6j07a90db3nKjF8tTT_HZoERrck9rLxVFTaRrMpbGOY9-0rqEGoNIL-9P_Ge-6ro7YlvOXZm9K0UuiVPQQfF68AWler2igOWfAPux3N_3KVca_AB8tHWAq7irxYc6yWvfvVmnlWw0P4kZfMhTRgJH8W__eavJU5ptbAFhjADRE7MroNfIW_huSZSq5eG6uyzCUBEsjSKYaOeJAwkR74mL6vmOnVu-dlrA";

export const metadata = {
  title: "Support | Turffin",
  description:
    "Contact the Turffin team for bookings, venue partnerships, billing, and technical help. Help center, email, and phone for Bangladesh-based support.",
};

function IconCard({ children, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-turf-primary-container/10 text-turf-primary transition-colors group-hover:bg-turf-primary group-hover:text-white ${className}`}
    >
      {children}
    </div>
  );
}

function LocationIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg className="h-10 w-10 text-turf-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-10 w-10 text-turf-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
  );
}

function GroupsIcon() {
  return (
    <svg className="h-10 w-10 text-turf-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C17 14.17 12.33 13 9.99 13H8zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5C23 15.5 19.5 15 16 15z" />
    </svg>
  );
}

function ArrowForwardIcon() {
  return (
    <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  );
}

const contactRows = [
  {
    title: "Our office",
    lines: ["Level 8, Bashundhara City (example)", "Dhaka 1205, Bangladesh"],
    icon: <LocationIcon />,
  },
  {
    title: "Email us",
    lines: [
      { href: "mailto:support@turffin.example", text: "support@turffin.example" },
      { href: "mailto:partners@turffin.example", text: "partners@turffin.example" },
    ],
    icon: <MailIcon />,
  },
  {
    title: "Call us",
    lines: ["+880 1XXX-XXXXXX", "Sun–Thu: 9:00 am – 8:00 pm (BST)"],
    icon: <CallIcon />,
  },
];

export default function SupportPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}>
      <main>
        <section className="relative overflow-hidden bg-white py-8 md:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-turf-primary-container blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-turf-tertiary-tint blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6">
            <span
              className={`${lexend.className} mb-4 block text-sm font-bold uppercase tracking-widest text-turf-primary`}
            >
              Help center
            </span>
            <h1 className={`${lexend.className} mb-4 text-3xl font-bold tracking-[-0.02em] text-turf-on-surface md:text-4xl`}>
              Contact our team
            </h1>
            <p className="mx-auto max-w-2xl text-base text-turf-on-surface-variant">
              Whether you are booking a premium turf, listing a venue, or need help with your account, the Turffin
              support team is here to keep every session on track.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SupportInquiryForm />
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="space-y-5">
                {contactRows.map((row) => (
                  <div key={row.title} className="group flex gap-4">
                    <IconCard>{row.icon}</IconCard>
                    <div>
                      <h3 className={`${lexend.className} mb-1 text-lg font-semibold text-turf-on-surface`}>
                        {row.title}
                      </h3>
                      {row.lines.map((line, i) =>
                        typeof line === "string" ? (
                          <p key={i} className="text-turf-on-surface-variant">
                            {line}
                          </p>
                        ) : (
                          <a
                            key={line.href}
                            href={line.href}
                            className="block text-turf-on-surface-variant transition hover:text-turf-primary"
                          >
                            {line.text}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="group relative h-[300px] overflow-hidden rounded-xl border border-slate-200">
                <img
                  src={mapImage}
                  alt="Map of Dhaka area with Turffin support location (illustrative)"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-slate-900/10" />
                <div
                  className={`${lexend.className} absolute bottom-4 left-4 rounded-lg bg-white/90 px-4 py-2 text-xs font-bold shadow-sm backdrop-blur-sm`}
                >
                  HQ: Dhaka, Bangladesh
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-slate-900 p-8 text-white">
                <div
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-turf-primary-container/20 blur-3xl"
                  aria-hidden
                />
                <h4 className={`${lexend.className} relative z-10 mb-3 text-xl font-bold`}>List your venue?</h4>
                <p className="relative z-10 mb-6 text-sm leading-relaxed text-slate-400">
                  Join Turffin&apos;s network and reach more teams and players—simple tools and fair taka-based payouts
                  when you are ready to scale.
                </p>
                <a
                  href="mailto:venues@turffin.example"
                  className={`${lexend.className} group relative z-10 inline-flex items-center gap-2 text-sm font-bold text-turf-primary-container`}
                >
                  Apply for partnership
                  <ArrowForwardIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-turf-surface-low py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center shadow-turf-glow">
                <HelpIcon />
                <h3 className={`${lexend.className} mt-4 mb-2 text-lg font-semibold text-turf-on-surface`}>
                  Knowledge base
                </h3>
                <p className="mb-6 text-sm text-turf-on-surface-variant">
                  Quick answers on bookings, cancellations, and field rules.
                </p>
                <Link
                  href="/browse-turf"
                  className="text-sm font-bold text-turf-primary underline decoration-turf-primary/30 underline-offset-4"
                >
                  Browse turfs
                </Link>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center shadow-turf-glow">
                <ChatIcon />
                <h3 className={`${lexend.className} mt-4 mb-2 text-lg font-semibold text-turf-on-surface`}>
                  Live chat
                </h3>
                <p className="mb-6 text-sm text-turf-on-surface-variant">
                  For urgent help during business hours, email us and we will prioritise your thread.
                </p>
                <a
                  href="mailto:support@turffin.example?subject=Live%20chat%20request"
                  className="text-sm font-bold text-turf-primary underline decoration-turf-primary/30 underline-offset-4"
                >
                  Email support
                </a>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center shadow-turf-glow">
                <GroupsIcon />
                <h3 className={`${lexend.className} mt-4 mb-2 text-lg font-semibold text-turf-on-surface`}>
                  Community
                </h3>
                <p className="mb-6 text-sm text-turf-on-surface-variant">
                  Leagues, schools, and clubs use Turffin to coordinate fixtures and away games.
                </p>
                <Link
                  href="/about-us"
                  className="text-sm font-bold text-turf-primary underline decoration-turf-primary/30 underline-offset-4"
                >
                  About Turffin
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";

export function PricingHeader() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-6 pt-4 text-center md:px-6">
      <Badge variant="accent" className="mb-3 px-4 py-1.5 tracking-[0.18em]">
        Pricing plans
      </Badge>
      <h1 className="mb-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-turf-on-surface md:text-5xl">
        Elite performance, tailored to your game.
      </h1>
      <p className="mx-auto max-w-2xl text-base text-turf-on-surface-variant">
        Choose the perfect membership to unlock premium venues and simplified booking.
      </p>
    </section>
  );
}

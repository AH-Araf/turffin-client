import { Check, CircleX } from "lucide-react";
import { formatPrice } from "@/data/turfs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PlansGrid({ plans, currency }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={[
              "relative flex flex-col p-6 shadow-turf-glow transition duration-300 hover:-translate-y-1 hover:shadow-turf-card-lift",
              plan.featured ? "border-4 border-turf-primary-container bg-slate-900 text-white" : "border-slate-200 bg-white",
            ].join(" ")}
          >
            {plan.featured ? (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-turf-primary-container px-4 py-1 text-xs font-bold uppercase tracking-widest text-turf-on-primary-container">
                Most popular
              </div>
            ) : null}
            <div className="mb-6">
              <h2 className={`mb-1 text-xl font-bold ${plan.featured ? "text-white" : "text-turf-on-surface"}`}>{plan.name}</h2>
              <p className={`text-sm ${plan.featured ? "text-slate-300" : "text-turf-on-surface-variant"}`}>{plan.blurb}</p>
            </div>
            <div className="mb-6">
              {plan.priceIsCustom ? (
                <p className={`text-2xl font-bold md:text-3xl ${plan.featured ? "text-white" : "text-turf-on-surface"}`}>{plan.priceDisplay}</p>
              ) : (
                <p>
                  <span className={`text-2xl font-bold md:text-3xl ${plan.featured ? "text-white" : "text-turf-on-surface"}`}>
                    {formatPrice(plan.priceAmount, currency)}
                  </span>
                  <span className={plan.featured ? "text-slate-400" : "text-turf-on-surface-variant"}> {plan.pricePeriod}</span>
                </p>
              )}
            </div>
            <ul className="mb-6 flex grow flex-col gap-2 text-sm">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2">
                  {f.ok ? <Check className="mt-0.5 h-4 w-4 text-turf-primary" aria-hidden /> : <CircleX className="mt-0.5 h-4 w-4 text-slate-400" aria-hidden />}
                  <span className={!f.ok ? "text-slate-400" : plan.featured ? "text-slate-100" : "text-turf-on-surface"}>{f.text}</span>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant={plan.ctaStyle === "primary" ? "accent" : "secondary"}
              className={`mt-auto w-full ${plan.ctaStyle !== "primary" ? "border-2 border-slate-800 hover:bg-slate-800 hover:text-white" : ""}`}
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

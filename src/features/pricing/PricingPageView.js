import { comparisonRows, pricingCtaBg, pricingCurrency, pricingFaqs, pricingPlans } from "./data";
import { ComparisonTable } from "./components/ComparisonTable";
import { PlansGrid } from "./components/PlansGrid";
import { PricingCta } from "./components/PricingCta";
import { PricingFaq } from "./components/PricingFaq";
import { PricingHeader } from "./components/PricingHeader";

export function PricingPageView() {
  return (
    <div className="min-h-screen bg-turf-surface text-turf-on-surface antialiased">
      <main>
        <PricingHeader />
        <PlansGrid plans={pricingPlans} currency={pricingCurrency} />
        <ComparisonTable rows={comparisonRows} />
        <PricingFaq faqs={pricingFaqs} />
        <PricingCta bgImage={pricingCtaBg} />
      </main>
    </div>
  );
}

export const pricingCurrency = "৳";

export const pricingPlans = [
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

export const comparisonRows = [
  { feature: "Booking window", basic: "24 hours", pro: "7 days", elite: "30 days" },
  { feature: "Hourly discount", basic: "—", pro: "15%", elite: "30%" },
  { feature: "Locker access", basic: "Standard", pro: "Premium", elite: "Private suite" },
  { feature: "Cancellation policy", basic: "48h notice", pro: "12h notice", elite: "Instant credit" },
  { feature: "Multi-venue access", basic: "—", pro: "yes", elite: "yes" },
  { feature: "Data analytics", basic: "—", pro: "yes", elite: "yes" },
];

export const pricingFaqs = [
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

export const pricingCtaBg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgeF6a_xFpbm-uUQiMaJsrVZay1CyiIrxs3455UC4fI_4W7dLeaHBzVO7HG_Hz8N9wzJ1hW1ewi_1DbnmMdppCzUQsfYS4a1_E3k-eLXDy-wZ0kBkm6IgU7fLdjLmgTq9xwk4LS6GAppP04BaH37RCCLh9Bm8ro0-f5J_S9XKxjxw8muIvE_VEoFZqEGmmVkdmj3gIBmw-wUC6K-O0WW-c00PApIYDMFGuzxcXw03Eui_vlUpQG8B8BqwSZcJtGFptr-DZW-SVvA";

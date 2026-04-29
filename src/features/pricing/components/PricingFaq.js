export function PricingFaq({ faqs }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-turf-on-surface">Frequently asked questions</h2>
          <p className="mt-1 text-sm text-turf-on-surface-variant">Everything you need to know about Turffin memberships.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="mb-1.5 text-base font-semibold text-turf-on-surface">{f.q}</h3>
              <p className="text-sm leading-relaxed text-turf-on-surface-variant">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

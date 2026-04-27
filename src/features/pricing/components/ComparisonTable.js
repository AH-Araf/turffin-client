function CellValue({ value, highlight }) {
  if (value === "—") return <span className="text-turf-on-surface-variant">—</span>;
  if (value === "yes") return <span className="text-turf-primary" aria-label="Yes">✓</span>;
  return <span className={highlight === "pro" ? "font-bold text-turf-primary" : "text-turf-on-surface"}>{value}</span>;
}

export function ComparisonTable({ rows }) {
  return (
    <section className="border-t border-slate-200 bg-turf-surface py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-turf-on-surface">Compare all features</h2>
          <p className="mt-1 text-sm text-turf-on-surface-variant">A detailed breakdown of every membership perk.</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-center font-semibold">Basic</th>
                <th className="px-4 py-3 text-center font-semibold text-turf-primary">Pro</th>
                <th className="px-4 py-3 text-center font-semibold">Elite</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-100 transition-colors last:border-0 hover:bg-turf-surface">
                  <td className="px-4 py-2.5 font-semibold text-turf-on-surface">{row.feature}</td>
                  <td className="px-4 py-2.5 text-center"><CellValue value={row.basic} /></td>
                  <td className="px-4 py-2.5 text-center"><CellValue value={row.pro} highlight="pro" /></td>
                  <td className="px-4 py-2.5 text-center"><CellValue value={row.elite} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

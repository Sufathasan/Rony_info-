import { ArrowUpRight } from 'lucide-react';
import { mediaReferences } from '../data/profile';

export function MediaCoverage() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="mb-12">
          <div className="section-tag">External validation</div>
          <h2 className="section-title">Media Coverage & Professional References</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {mediaReferences.map((item) => (
            <article key={item.publication} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card dark:border-white/10 dark:bg-slate-900/80">
              <img src={item.image} alt={item.publication} loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{item.publication}</h3>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-royalGold/10 p-2 text-royalGold">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

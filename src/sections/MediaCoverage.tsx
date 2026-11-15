import { ArrowUpRight } from 'lucide-react';
import { mediaReferences } from '../data/profile';

export function MediaCoverage() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="mb-12">
          <div className="section-tag">External validation</div>
          <h2 className="section-title">Media Coverage</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {mediaReferences.map((item) => (
            <article key={item.publication} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80">
              <img src={item.image} alt="The Daily Star article image about NRB Bank and Astra Airways" loading="lazy" className="h-56 w-full object-cover sm:h-72" />
              <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="section-tag mb-3">Featured article</p>
                  <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{item.publication}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Read the ${item.publication} article`} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-royalGold/40 bg-royalGold/10 px-5 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5 hover:border-royalGold hover:bg-royalGold hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royalGold focus-visible:ring-offset-2 dark:text-white dark:focus-visible:ring-offset-slate-900">
                  Read article
                  <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

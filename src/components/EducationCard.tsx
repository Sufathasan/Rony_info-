import type { EducationItem } from '../data/education';

export function EducationCard({ institution, degree, details, result, year, type }: EducationItem) {
  return (
    <article className="glass-card h-full p-5 sm:p-6">
      <div className="mb-4 inline-flex rounded-full border border-royalGold/40 bg-royalGold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-royalGold">
        {type}
      </div>
      <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{institution}</h3>
      <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-200">{degree}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{details}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm dark:border-white/10">
        <span className="text-slate-600 dark:text-slate-300">{result}</span>
        <span className="font-medium text-royalGold">{year}</span>
      </div>
    </article>
  );
}

import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import type { ExperienceItem } from '../data/experience';

interface ExperienceCardProps {
  item: ExperienceItem;
  isLast?: boolean;
}

export function ExperienceCard({ item, isLast = false }: ExperienceCardProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-royalGold/50 bg-royalGold/10 font-semibold text-royalGold shadow-sm">
          {item.logoText}
        </div>
        {!isLast && <div className="mt-3 h-full w-px bg-gradient-to-b from-royalGold via-royalGold/50 to-transparent" />}
      </div>

      <article className="glass-card flex-1 p-5 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 dark:border-white/10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-royalGold/30 bg-royalGold/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-royalGold">
              <BriefcaseBusiness size={12} />
              {item.company}
            </div>
            <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{item.role}</h3>
            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{item.department}</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
            {item.period}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-royalGold">Responsibilities</h4>
            <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item.responsibilities.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-royalGold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-royalGold">Key achievements</h4>
            <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item.achievements.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-royalGold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

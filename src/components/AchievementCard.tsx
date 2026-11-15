import { Award, Medal } from 'lucide-react';
import type { AchievementItem } from '../data/achievements';

export function AchievementCard({ title, description, date, icon }: AchievementItem) {
  const Icon = icon === 'medal' ? Medal : Award;

  return (
    <article className="glass-card h-full p-6 transition hover:-translate-y-1 hover:border-royalGold/40">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royalGold/10 text-royalGold">
        <Icon size={28} />
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-royalGold">{date}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-midnight dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </article>
  );
}

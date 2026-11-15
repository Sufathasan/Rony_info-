import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-8 dark:border-white/10 dark:bg-midnight/70">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-xl font-semibold text-midnight dark:text-white">{profile.name}</div>
          <p className="mt-1">Banking & Financial Services Professional</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-royalGold">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <span>•</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

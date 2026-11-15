import { Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-8 dark:border-white/10 dark:bg-midnight/70">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-xl font-semibold text-midnight dark:text-white">{profile.name}</div>
          <p className="mt-1">Banking & Financial Services Professional</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect with Md Mahmudul Hasan Rony on LinkedIn" title="LinkedIn profile" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#004182] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-midnight">
            <Linkedin size={21} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <span>•</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

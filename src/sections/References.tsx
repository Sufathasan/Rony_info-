import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { references } from '../data/profile';

export function References() {
  const [open, setOpen] = useState(false);

  return (
    <section id="references" className="section-shell bg-slate-100/80 dark:bg-slate-900/40">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">Professional credibility</div>
            <h2 className="section-title">Professional References</h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-card dark:border-white/10 dark:bg-slate-900/70">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-midnight dark:border-white/10 dark:bg-slate-800 dark:text-white"
            >
              <span className="text-base font-semibold">Professional References</span>
              <ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} size={18} />
            </button>

            {open && (
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {references.map((ref) => (
                  <article key={ref.email} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800/60">
                    <div className="mb-4 inline-flex rounded-full border border-royalGold/40 bg-royalGold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-royalGold">
                      Reference
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{ref.name}</h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{ref.position}</p>
                    <p className="mt-1 text-sm font-medium text-midnight dark:text-white">{ref.organization}</p>
                    <div className="mt-5 space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-slate-600 dark:text-slate-300">Email: </span>
                        <a href={`mailto:${ref.email}`} className="text-royalGold underline">{ref.email}</a>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-600 dark:text-slate-300">Mobile: </span>
                        <a href={`tel:${ref.mobile}`} className="text-royalGold underline">{ref.mobile}</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

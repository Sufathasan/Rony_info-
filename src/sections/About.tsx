import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language].about;

  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="section-tag">Executive Profile</div>
              <h2 className="section-title">{t.heading}</h2>
              <div className="gold-divider" />
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{t.intro}</p>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-royalGold">Core Focus</p>
              <div className="mt-5 grid gap-3">
                {profile.focusAreas.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-royalGold" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

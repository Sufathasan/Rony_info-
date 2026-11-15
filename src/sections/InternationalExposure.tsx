import { motion } from 'framer-motion';
import { travelNotes } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface InternationalExposureProps {
  language: Language;
}

export function InternationalExposure({ language }: InternationalExposureProps) {
  const t = translations[language].exposure;

  return (
    <section id="international-exposure" className="section-shell bg-slate-100/70 dark:bg-slate-900/40">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">Global Perspective</div>
            <h2 className="section-title">{t.heading}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {travelNotes.map((item) => (
              <article key={item.country} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/70">
                <img src={item.image} alt={item.country} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{item.country}</h3>
                    <span className="text-2xl">{item.flag}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.reflection}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

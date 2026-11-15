import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface PersonalProps {
  language: Language;
}

export function Personal({ language }: PersonalProps) {
  const t = translations[language].personal;

  return (
    <section id="personal" className="section-shell">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl text-center">
          <div className="section-tag">Life beyond work</div>
          <h2 className="section-title">{t.heading}</h2>
          <div className="glass-card mt-8 flex flex-col items-center justify-center gap-4 p-6 sm:p-8">
            <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ivory via-white to-royalGold/10 p-3 dark:from-slate-800 dark:via-slate-800 dark:to-royalGold/10">
              <img src={profile.familyImage} alt="Artistic illustration of a husband and wife together; not a photograph" loading="lazy" className="mx-auto h-52 w-full object-contain sm:h-60" />
            </div>
            <p className="font-display text-2xl text-midnight dark:text-white">{t.caption}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">An artistic illustration, not a photograph.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

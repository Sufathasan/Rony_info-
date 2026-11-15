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
          <div className="glass-card mt-8 flex flex-col items-center justify-center gap-4 p-8">
            <img src={profile.familyImage} alt="With Family" className="h-28 w-28 rounded-full object-cover ring-4 ring-royalGold/15" />
            <p className="font-display text-2xl text-midnight dark:text-white">{t.caption}</p>
            <a href={profile.familyProfile} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-royalGold hover:underline">
              View family profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

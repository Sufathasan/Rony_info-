import { motion } from 'framer-motion';
import { ExperienceCard } from '../components/ExperienceCard';
import { experienceData } from '../data/experience';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface ExperienceProps {
  language: Language;
}

export function Experience({ language }: ExperienceProps) {
  const t = translations[language].experience;

  return (
    <section id="experience" className="section-shell bg-slate-100/70 dark:bg-slate-900/40">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">{t.subtitle}</div>
            <h2 className="section-title">{t.heading}</h2>
          </div>

          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <ExperienceCard key={`${item.company}-${item.period}`} item={item} isLast={index === experienceData.length - 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

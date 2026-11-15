import { motion } from 'framer-motion';
import { EducationCard } from '../components/EducationCard';
import { educationData } from '../data/education';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface EducationProps {
  language: Language;
}

export function Education({ language }: EducationProps) {
  const t = translations[language].education;

  return (
    <section id="education" className="section-shell bg-slate-100/80 dark:bg-slate-900/40">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">Academic Journey</div>
            <h2 className="section-title">{t.heading}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {educationData.map((item) => (
              <EducationCard key={item.institution} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

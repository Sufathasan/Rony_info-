import { motion } from 'framer-motion';
import { SkillCard } from '../components/SkillCard';
import { skillsData } from '../data/skills';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface SkillsProps {
  language: Language;
}

export function Skills({ language }: SkillsProps) {
  const t = translations[language].skills;

  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">Capabilities</div>
            <h2 className="section-title">{t.heading}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillsData.map((card) => (
              <SkillCard key={card.title} title={card.title} items={card.items} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

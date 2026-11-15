import { motion } from 'framer-motion';
import { AchievementCard } from '../components/AchievementCard';
import { achievementData } from '../data/achievements';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface AchievementsProps {
  language: Language;
}

export function Achievements({ language }: AchievementsProps) {
  const t = translations[language].achievements;

  return (
    <section id="achievements" className="section-shell">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">Recognition</div>
            <h2 className="section-title">{t.heading}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievementData.map((item) => (
              <AchievementCard key={item.title} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

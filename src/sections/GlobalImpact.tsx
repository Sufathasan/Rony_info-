import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface GlobalImpactProps {
  language: Language;
}

export function GlobalImpact({ language }: GlobalImpactProps) {
  const t = translations[language].globalImpact;

  return (
    <section id="global-impact" className="section-shell bg-gradient-to-b from-white to-slate-100/80 dark:from-midnight dark:to-slate-900/80">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-ivory to-royalGold/10 p-3 shadow-card dark:border-white/10 dark:from-slate-900 dark:via-slate-900 dark:to-royalGold/10">
            <img src={profile.summitImage} alt="Global Youth Impact Summit 2027 event artwork" loading="lazy" className="mx-auto max-h-[560px] w-full rounded-[1.5rem] object-contain" />
          </div>

          <div>
            <div className="section-tag">Upcoming International Engagement</div>
            <h2 className="section-title">{t.heading}</h2>
            <div className="mt-6 rounded-3xl border border-royalGold/30 bg-royalGold/8 p-5">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <span className="rounded-full bg-royalGold px-3 py-1 font-semibold text-midnight">Upcoming</span>
                <span className="rounded-full border border-royalGold/40 bg-royalGold/10 px-3 py-1 font-semibold text-royalGold">Selected / Registered International Delegate</span>
                <span>•</span>
                <span>Paris, France</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-midnight dark:text-white">{t.selected}</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royalGold">{t.edition}</div>
                <div className="mt-2 text-xl font-medium text-midnight dark:text-white">2nd Edition</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royalGold">{t.location}</div>
                <div className="mt-2 text-xl font-medium text-midnight dark:text-white">Paris, France</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royalGold">{t.date}</div>
                <div className="mt-2 text-xl font-medium text-midnight dark:text-white">25–28 March 2027</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royalGold">{t.representation}</div>
                <div className="mt-2 text-xl font-medium text-midnight dark:text-white">Bangladesh</div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-royalGold">{t.objective}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-midnight dark:text-white">Inclusive and Sustainable Finance: Empowering Youth and Driving Economic Transformation in Bangladesh.</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p>• Sustainable Development</p>
                <p>• International Cooperation</p>
                <p>• Peace and Diplomacy</p>
                <p>• Youth Leadership</p>
                <p>• United Nations Sustainable Development Goals (SDGs)</p>
                <p>• Paris Youth Declaration 2027</p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card dark:border-white/10 dark:bg-slate-900/80">
              <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{t.action}</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p>1. Financial Literacy: Awareness programmes, workshops, and knowledge-sharing activities for young people, women, and underserved communities.</p>
                <p>2. Digital Financial Inclusion: Promoting digital banking awareness and innovative financial solutions.</p>
                <p>3. Sustainable Finance: Sharing international best practices with professional networks.</p>
                <p>4. Youth Entrepreneurship: Encouraging young entrepreneurs and small businesses to understand financial planning, savings, banking facilities, and responsible access to credit.</p>
                <p>5. Professional Collaboration: Working with financial institutions, youth organizations, and relevant stakeholders.</p>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-700 dark:text-slate-200">
                To become a bridge between global financial development practices and local implementation, contributing to a more inclusive, responsible, and sustainable financial ecosystem in Bangladesh.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

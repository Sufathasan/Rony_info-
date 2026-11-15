import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language].hero;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-ivory to-white dark:from-midnight dark:via-deepNavy dark:to-midnight">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,164,92,0.14),_transparent_35%)]" />
      <div className="container-shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center rounded-full border border-royalGold/40 bg-royalGold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-royalGold">
              {t.badge}
            </div>

            <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-tight text-midnight dark:text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-200">
              {profile.shortTitle}
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">{t.introText}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-royalGold px-5 py-3 text-sm font-semibold text-midnight transition hover:brightness-95">
                {t.viewExperience}
                <ArrowRight size={18} />
              </a>
              <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-midnight transition hover:border-royalGold dark:border-white/10 dark:bg-slate-900 dark:text-white">
                <Download size={18} />
                {t.downloadCv}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-transparent px-5 py-3 text-sm font-semibold text-midnight transition hover:border-royalGold dark:border-white/10 dark:text-white">
                <Mail size={18} />
                {t.contactMe}
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { label: t.statYears, value: 'Nearly a decade' },
                { label: t.statPartners, value: 'More than 400' },
                { label: t.statEmi, value: 'Approximately 200' }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royalGold">{item.label}</div>
                  <div className="mt-2 font-display text-2xl font-semibold text-midnight dark:text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full border border-royalGold/25 bg-royalGold/10 blur-2xl" />
            <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full border border-slate-300 bg-slate-200/40 blur-2xl dark:border-white/10 dark:bg-white/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-card dark:border-white/10 dark:bg-slate-900/70">
              <img
                src={profile.portrait}
                alt={profile.name}
                className="h-[620px] w-full rounded-[1.6rem] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export function Certifications() {
  const certifications = [
    {
      title: 'Basics of Leadership Management & Theories',
      provider: 'UniAthena in partnership with Cambridge International Qualifications, UK',
      date: '26 April 2025'
    },
    {
      title: 'Artificial Intelligence: Preparing for the Future of Work',
      provider: 'Alison',
      date: '1 May 2025'
    }
  ];

  return (
    <section className="section-shell">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="mb-12">
            <div className="section-tag">Learning</div>
            <h2 className="section-title">Professional Certifications</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((item) => (
              <article key={item.title} className="glass-card h-full p-6">
                <div className="mb-4 inline-flex rounded-full border border-royalGold/40 bg-royalGold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-royalGold">
                  Certification
                </div>
                <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.provider}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm dark:border-white/10">
                  <span className="text-slate-600 dark:text-slate-300">Date</span>
                  <span className="font-medium text-royalGold">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

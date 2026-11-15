interface SkillCardProps {
  title: string;
  items: string[];
}

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="glass-card h-full p-6">
      <h3 className="font-display text-2xl font-semibold text-midnight dark:text-white">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

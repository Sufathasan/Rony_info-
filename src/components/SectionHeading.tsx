interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <div className="section-tag">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}

interface LanguageToggleProps {
  language: 'en' | 'bn';
  onChange: (value: 'en' | 'bn') => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-midnight shadow-sm transition hover:border-royalGold dark:border-white/10 dark:bg-slate-900/70 dark:text-white">
      <span className="text-xs uppercase tracking-[0.24em] text-royalGold">Lang</span>
      <select
        aria-label="Select language"
        value={language}
        onChange={(event) => onChange(event.target.value as 'en' | 'bn')}
        className="bg-transparent text-sm font-medium outline-none"
      >
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
      </select>
    </label>
  );
}

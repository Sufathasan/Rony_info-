import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import type { Language } from '../data/translations';

interface NavbarProps {
  language: Language;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onLanguageChange: (value: Language) => void;
  navItems: { id: string; label: string }[];
}

export function Navbar({ language, theme, onThemeToggle, onLanguageChange, navItems }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-midnight/80">
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-royalGold/40 bg-royalGold/10 font-display text-lg font-bold text-royalGold">
            MR
          </div>
          <div>
            <div className="font-display text-lg font-bold tracking-tight text-midnight dark:text-white">Md Mahmudul Hasan Rony</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-600 transition hover:text-royalGold dark:text-slate-300 dark:hover:text-royalGold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-midnight dark:border-white/10 dark:text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-white/10 dark:bg-midnight/95 lg:hidden">
          <div className="container-shell flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-royalGold dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3">
              <ThemeToggle theme={theme} onToggle={onThemeToggle} />
              <LanguageToggle language={language} onChange={onLanguageChange} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { profile } from './data/profile';
import { translations, type Language } from './data/translations';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Skills } from './sections/Skills';
import { GlobalImpact } from './sections/GlobalImpact';
import { InternationalExposure } from './sections/InternationalExposure';
import { MediaCoverage } from './sections/MediaCoverage';
import { Personal } from './sections/Personal';
import { References } from './sections/References';
import { SectionHeading } from './components/SectionHeading';

function App() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setBackToTopVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { id: 'home', label: translations[language].nav.home },
      { id: 'about', label: translations[language].nav.about },
      { id: 'experience', label: translations[language].nav.experience },
      { id: 'achievements', label: translations[language].nav.achievements },
      { id: 'education', label: translations[language].nav.education },
      { id: 'global-impact', label: translations[language].nav.globalImpact },
      { id: 'international-exposure', label: translations[language].nav.exposure },
      { id: 'personal', label: translations[language].nav.personal },
      { id: 'contact', label: translations[language].nav.contact }
    ],
    [language]
  );

  const cvUrl = `${import.meta.env.BASE_URL}documents/Md-Mahmudul-Hasan-Rony-CV.pdf`;

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-ivory text-midnight transition-colors duration-300 dark:bg-midnight dark:text-white">
        <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
          <div className="h-full bg-gradient-to-r from-royalGold via-[#e7c66d] to-royalGold" style={{ width: `${scrollProgress}%` }} />
        </div>

        <Navbar
          language={language}
          theme={theme}
          onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          onLanguageChange={(value) => setLanguage(value)}
          navItems={navItems}
        />

        <main>
          <Hero language={language} />
          <About language={language} />
          <Experience language={language} />
          <Achievements language={language} />
          <Education language={language} />
          <Certifications />
          <Skills language={language} />
          <GlobalImpact language={language} />
          <InternationalExposure language={language} />
          <MediaCoverage />
          <Personal language={language} />
          <section id="contact" className="section-shell">
            <div className="container-shell">
              <div className="mb-10">
                <SectionHeading eyebrow="Contact" title={translations[language].contact.heading} subtitle="Let's connect on strategic partnership, financial inclusion, and business development opportunities." />
              </div>
              <ContactSection cvUrl={cvUrl} />
            </div>
          </section>
          <References />
        </main>

        <Footer />
        <BackToTop visible={backToTopVisible} />
      </div>
    </div>
  );
}

export default App;

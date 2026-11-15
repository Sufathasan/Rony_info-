import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  visible: boolean;
}

export function BackToTop({ visible }: BackToTopProps) {
  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-royalGold text-midnight shadow-lg transition hover:scale-105"
    >
      <ArrowUp size={18} />
    </button>
  );
}

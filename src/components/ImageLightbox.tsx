import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-5xl rounded-3xl bg-white p-2 shadow-2xl dark:bg-slate-900" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          aria-label="Close image viewer"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md dark:bg-slate-800 dark:text-white"
        >
          <X size={16} />
        </button>
        <img src={src} alt={alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />
      </div>
    </div>
  );
}

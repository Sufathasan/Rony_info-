import { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';
import type { GalleryItem } from '../data/gallery';

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(item)}
            className="group relative mb-4 block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover transition duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </button>
        ))}
      </div>

      {active && <ImageLightbox src={active.src} alt={active.alt} onClose={() => setActive(null)} />}
    </>
  );
}

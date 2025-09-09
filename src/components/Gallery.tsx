import React, { useEffect, useRef } from 'react';

interface Image {
  src: string;
  thumb: string;
  alt: string;
  title: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!galleryRef.current || isLoaded.current) return;
    
    const initLightGallery = () => {
      if (galleryRef.current && (window as any).lightGallery) {
        const gallery = (window as any).lightGallery(galleryRef.current, {
          selector: '.gallery-item',
          download: false,
          counter: true,
        });
        isLoaded.current = true;
      }
    };
    
    if ((window as any).lightGallery) {
      initLightGallery();
    } else {
      const script = document.querySelector('#lightgallery-script');
      script?.addEventListener('load', initLightGallery);
    }
    
  }, [images]);

  return (
    <div ref={galleryRef} className="gallery-grid">
      {images.map((image, index) => (
        <a
          key={index}
          className="gallery-item"
          href={image.src}
          data-aos="zoom-in"
          data-aos-delay={index * 50}
        >
          <img src={image.thumb} alt={image.alt} loading="lazy" />
          <div className="gallery-item-overlay">
            <span>{image.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};
export default Gallery;
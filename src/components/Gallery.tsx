import React, { useState } from 'react';

interface Image {
  src: string;
  thumb: string;
  alt: string;
  title: string;
  description?: string; // Nueva propiedad para info adicional
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.src}
          className={`gallery-item${activeIndex === index ? ' active' : ''}`}
          onClick={(e) => {
            if (isTouchDevice) {
              e.preventDefault();
              setActiveIndex(activeIndex === index ? null : index);
            }
          }}
          onBlur={() => setActiveIndex(null)}
          onMouseLeave={() => setActiveIndex(null)}
          tabIndex={0}
          data-aos="zoom-in"
          data-aos-delay={index * 50}
        >
          <img src={image.thumb} alt={image.alt} loading="lazy" />
          <div className="gallery-item-overlay">
            <span className="gallery-title">{image.title}</span>
            {image.description && (
              <small className="gallery-description">{image.description}</small>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;

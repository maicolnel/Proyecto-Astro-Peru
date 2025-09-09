import React from 'react';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroProps> = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }}
    >
      <div className="hero-content" data-aos="fade-in" data-aos-duration="1500">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="btn btn-primary btn-lg">{buttonText}</a>
        )}
      </div>
    </section>
  );
};
export default HeroSection;
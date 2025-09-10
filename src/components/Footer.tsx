import { useState } from 'react';
import StandaloneMusicPlayer from "./StandaloneMusicPlayer";

const base = '/Proyecto-Astro-Peru/';

const Footer = () => {
  const musicTracks = [
    { src: `${base}music/huaino.mp3`, title: "Flor de Retama (Huayno)" },
    { src: `${base}music/marinera.mp3`, title: "La Concheperla (Marinera)" },
    { src: `${base}music/vals-criollo.mp3`, title: "La Flor de la Canela (Vals)" },
    { src: `${base}music/festejo.mp3`, title: "Ritmo de Festejo" },
    { src: `${base}music/cajon.mp3`, title: "Solo de Cajón" },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicTracks.length);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + musicTracks.length) % musicTracks.length);
  };
  
  const currentTrack = musicTracks[currentTrackIndex];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Proyecto de Intercambio Cultural</h3>
          <p>Estudiantes de Perú 🇵🇪 en la Universidad Americana, Barranquilla 🇨🇴</p>
          <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
        </div>
        <div className="footer-music">
          <h4>Música para el Alma</h4>
          <StandaloneMusicPlayer
            src={currentTrack.src}
            title={currentTrack.title}
            onNext={handleNextTrack}
            onPrev={handlePrevTrack}
            onEnded={handleNextTrack} 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Footer.tsx

import { useState } from 'react';
import StandaloneMusicPlayer from "./StandaloneMusicPlayer";

const Footer = () => {
  const musicTracks = [
    { src: "/music/huaino.mp3", title: "Flor de Retama (Huayno)" },
    { src: "/music/marinera.mp3", title: "La Concheperla (Marinera)" },
    { src: "/music/vals-criollo.mp3", title: "La Flor de la Canela (Vals)" },
    { src: "/music/festejo.mp3", title: "Ritmo de Festejo" },
    { src: "/music/cajon.mp3", title: "Solo de Cajón" },
  ];
  
  // Guardamos el índice de la canción que está sonando
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Función para ir a la siguiente canción
  const handleNextTrack = () => {
    // Usamos el operador de módulo (%) para que la lista sea circular (vuelva al inicio)
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicTracks.length);
  };

  // Función para ir a la canción anterior
  const handlePrevTrack = () => {
    // Lógica para que la lista sea circular hacia atrás
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + musicTracks.length) % musicTracks.length);
  };
  
  // Obtenemos la canción actual basándonos en el índice
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
          {/* Le pasamos al reproductor la canción actual y las funciones para cambiarla */}
          <StandaloneMusicPlayer
            src={currentTrack.src}
            title={currentTrack.title}
            onNext={handleNextTrack}
            onPrev={handlePrevTrack}
            onEnded={handleNextTrack} // Cuando una canción termina, reproduce la siguiente
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
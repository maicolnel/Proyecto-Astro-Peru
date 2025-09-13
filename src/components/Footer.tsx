import { useState } from 'react';
import StandaloneMusicPlayer from './StandaloneMusicPlayer';

const base = '/Proyecto-Astro-Peru/';

export default function Footer() {
  const musicTracks = [
    { src: `${base}music/La anaconda.mp3`, title: "La Anaconda" },
    { src: `${base}music/Shipbo Enamorado.mp3`, title: "Shipbo Enamorado" },
    { src: `${base}music/El Bonbon Asesino.mp3`, title: "El Bonbón Asesino" },
    { src: `${base}music/Triste Payaso.mp3`, title: "Triste Payaso" },
    { src: `${base}music/Una aventura mas.mp3`, title: "Una Aventura Más" },
    { src: `${base}music/Esta Noche - Orquesta Candela.mp3`, title: "Esta Noche - Orquesta Candela" },
    { src: `${base}music/Solo.mp3`, title: "Solo" },
    { src: `${base}music/Juramentos.mp3`, title: "Juramentos" },
    { src: `${base}music/Jipi Jay.mp3`, title: "Jipi Jay" },
    { src: `${base}music/Que Pasó - Papillón.mp3`, title: "Qué Pasó - Papillón" },
    { src: `${base}music/El Embrujo.mp3`, title: "El Embrujo" },
    { src: `${base}music/Siqui Siqui.mp3`, title: "Siqui Siqui" },
    { src: `${base}music/Damaris - TusuyKusun.mp3`, title: "Damaris - Tusuy Kusun" },
    { src: `${base}music/Tupay - Soy Caporal.mp3`, title: "Tupay - Soy Caporal" },
    { src: `${base}music/Mal Paso.mp3`, title: "Mal Paso" },
    { src: `${base}music/Que linda flor.mp3`, title: "Qué Linda Flor" },
    { src: `${base}music/Esta es mi tierra.mp3`, title: "Esta es Mi Tierra" },
    { src: `${base}music/AGUA MARINA.mp3`, title: "Agua Marina" },
    { src: `${base}music/El Condor Pasa.mp3`, title: "El Cóndor Pasa" },
    { src: `${base}music/Ni siquiera.mp3`, title: "Ni Siquiera" },
    { src: `${base}music/ME VAS A EXTRAÑAR.mp3`, title: "Me Vas a Extrañar" },
    { src: `${base}music/You Salsa.mp3`, title: "You Salsa" },
    { src: `${base}music/Probablemente.mp3`, title: "Probablemente" },
    { src: `${base}music/Con La Misma Moneda.mp3`, title: "Con La Misma Moneda" },
    { src: `${base}music/Quiereme.mp3`, title: "Quiéreme" },
    { src: `${base}music/La Revancha.mp3`, title: "La Revancha" },
    { src: `${base}music/Raices del Festejo.mp3`, title: "Raíces del Festejo" },
    { src: `${base}music/Jamás Impedirán.mp3`, title: "Jamás Impedirán" },
    { src: `${base}music/Los Kipus.mp3`, title: "Los Kipus" },
    { src: `${base}music/Regresa.mp3`, title: "Regresa" },
    { src: `${base}music/Motor y Motivo.mp3`, title: "Motor y Motivo" },
    { src: `${base}music/Contigo Peru.mp3`, title: "Contigo Perú" },
    { src: `${base}music/Negrito Chichivi.mp3`, title: "Negrito Chichivi" },
    { src: `${base}music/Ritmo, Color y Sabor.mp3`, title: "Ritmo, Color y Sabor" },
    { src: `${base}music/El Alcatraz.mp3`, title: "El Alcatraz" },
    { src: `${base}music/El Chacombo.mp3`, title: "El Chacombo" },
    { src: `${base}music/Cholo Soy.mp3`, title: "Cholo Soy" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    window.dispatchEvent(new Event('pause-all'));
    setCurrentIndex(i => (i + 1) % musicTracks.length);
  };

  const handlePrev = () => {
    window.dispatchEvent(new Event('pause-all'));
    setCurrentIndex(i => (i - 1 + musicTracks.length) % musicTracks.length);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Proyecto de Intercambio Cultural</h3>
          <p>Estudiantes de Perú 🇵🇪 en la Universidad Americana, Barranquilla 🇨🇴</p>
          <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
        </div>
        <div className="footer-music">
          <StandaloneMusicPlayer
            src={musicTracks[currentIndex].src}
            title={musicTracks[currentIndex].title}
            onNext={handleNext}
            onPrev={handlePrev}
            onEnded={handleNext}
          />
        </div>
      </div>
    </footer>
  );
}

import { useRef, useEffect } from 'react';

interface StandaloneMusicPlayerProps {
  src: string;
  title: string;
  onNext: () => void;
  onPrev: () => void;
  onEnded: () => void;
}

const StandaloneMusicPlayer = ({ src, title, onNext, onPrev, onEnded }: StandaloneMusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    audioRef.current?.play().catch(e => console.warn("La reproducción automática falló.", e));
  }, [src]);

  return (
    <div className="footer-player">
      <span className="music-player-title">{title}</span>
      <div className="player-controls-container">
        <button onClick={onPrev} className="player-button" aria-label="Canción anterior">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>
        <audio
          ref={audioRef}
          src={src}
          controls
          onEnded={onEnded}
        >
          Tu navegador no soporta el elemento de audio.
        </audio>
        <button onClick={onNext} className="player-button" aria-label="Siguiente canción">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StandaloneMusicPlayer;

// src/components/StandaloneMusicPlayer.tsx
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
  const firstMount = useRef(true);

  useEffect(() => {
    const pauseHandler = () => audioRef.current?.pause();
    window.addEventListener('pause-all', pauseHandler);
    return () => window.removeEventListener('pause-all', pauseHandler);
  }, []);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    window.dispatchEvent(new Event('pause-all'));
    audioRef.current?.play().catch(() => {});
  }, [src]);

  const handleEnded = () => {
    window.dispatchEvent(new Event('pause-all'));
    onEnded();
  };

  return (
    <div className="footer-music">
      <h4>Música para el Alma</h4>
      <div className="footer-player">
        <button onClick={() => { window.dispatchEvent(new Event('pause-all')); onPrev(); }} className="ctrl-prev" aria-label="Anterior">
          &#9664;
        </button>
        <audio ref={audioRef} src={src} controls onEnded={handleEnded} />
        <button onClick={() => { window.dispatchEvent(new Event('pause-all')); onNext(); }} className="ctrl-next" aria-label="Siguiente">
          &#9654;
        </button>
      </div>
      <div className="track-title">{title}</div>
    </div>
  );
};

export default StandaloneMusicPlayer;

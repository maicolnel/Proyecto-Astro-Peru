// src/components/MusicPlayer.tsx

import { useRef, useEffect } from 'react';

interface MusicPlayerProps {
  src: string;
  title: string;
  isPlaying: boolean;
  onPlay: () => void;
}

const MusicPlayer = ({ src, title, isPlaying, onPlay }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error al reproducir:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, src]);

  return (
    <div className="music-player-controls">
      <span className="music-player-title">{title}</span>
      <audio
        ref={audioRef}
        src={src}
        controls
        onPlay={onPlay}
      >
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
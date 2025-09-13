import { useRef, useEffect } from 'react';

interface MusicPlayerProps {
  id: string;
  src: string;
  title: string;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  onEnded: (id: string) => void;
}

const MusicPlayer = ({ id, src, title, isPlaying, onPlay, onEnded }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const pauseHandler = () => audioRef.current?.pause();
    window.addEventListener('pause-all', pauseHandler);
    return () => window.removeEventListener('pause-all', pauseHandler);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      window.dispatchEvent(new Event('pause-all'));
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, src]);

  return (
    <div className="music-player-controls">
      <span className="music-player-title">{title}</span>
      <audio
        ref={audioRef}
        src={src}
        controls
        onPlay={() => onPlay(id)}
        onEnded={() => onEnded(id)}
      />
    </div>
  );
};

export default MusicPlayer;

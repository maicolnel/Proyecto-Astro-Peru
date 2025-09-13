import { useState } from 'react';
import MusicPlayer from './MusicPlayer';

interface Track {
  id: string;
  src: string;
  title: string;
  description: string;
}

interface MusicListProps {
  tracks: Track[];
}

export default function MusicList({ tracks }: MusicListProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (id: string) => setPlayingId(id);
  const handleEnded = (id: string) => {
    const idx = tracks.findIndex(t => t.id === id);
    const next = tracks[(idx + 1) % tracks.length];
    setPlayingId(next.id);
  };

  return (
    <section className="section-container">
      <h2 className="section-title" data-aos="fade-up">Escucha Nuestros Ritmos</h2>
      <div className="music-track-list">
        {tracks.map((t, i) => (
          <div className="music-track-item" key={t.id} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="track-info">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </div>
            <MusicPlayer
              id={t.id}
              src={t.src}
              title={t.title}
              isPlaying={playingId === t.id}
              onPlay={handlePlay}
              onEnded={handleEnded}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

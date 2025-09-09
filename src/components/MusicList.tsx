// src/components/MusicList.tsx

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
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

    const handlePlayRequest = (idOfPlayer: string) => {
        setCurrentlyPlaying(idOfPlayer);
    };

    return (
        <section className="section-container">
            <h2 className="section-title" data-aos="fade-up">Escucha Nuestros Ritmos</h2>
            <div className="music-track-list">
                {tracks.map((track, index) => (
                    <div className="music-track-item" key={track.id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="track-info">
                            <h3>{track.title}</h3>
                            <p>{track.description}</p>
                        </div>
                        <MusicPlayer
                            src={track.src}
                            title={track.title}
                            isPlaying={currentlyPlaying === track.id}
                            onPlay={() => handlePlayRequest(track.id)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
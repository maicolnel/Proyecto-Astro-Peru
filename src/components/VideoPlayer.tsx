import React from 'react';

interface VideoPlayerProps {
  src: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  return (
    <div className="video-player-wrapper" data-aos="fade-up">
      {title && <h3 className="video-title">{title}</h3>}
      <div className="video-container">
        <video controls preload="metadata" playsInline>
          <source src={src} type="video/mp4" />
          Lo sentimos, tu navegador no soporta videos embebidos.
        </video>
      </div>
    </div>
  );
};
export default VideoPlayer;
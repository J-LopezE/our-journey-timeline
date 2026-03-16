import { useState, useRef } from 'react';

interface Options {
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
}

export const useYouTubeMusic = ({ videoId, startSeconds, endSeconds }: Options) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const buildSrc = (muted: boolean) => {
    const params = [
      'autoplay=1',
      'loop=1',
      `playlist=${videoId}`,
      'controls=0',
      'showinfo=0',
      'rel=0',
      'modestbranding=1',
      'enablejsapi=1',
      muted ? 'mute=1' : 'mute=0',
      startSeconds !== undefined ? `start=${startSeconds}` : '',
      endSeconds   !== undefined ? `end=${endSeconds}`     : '',
    ].filter(Boolean).join('&');
    return `https://www.youtube.com/embed/${videoId}?${params}`;
  };

  // Usamos useState para el src para poder cambiarlo reactivamente
  const [src, setSrc] = useState(buildSrc(true)); // empieza muted=true hasta que el usuario entre

  const play = () => {
    // En vez de postMessage, cambiamos el src con mute=0
    // Esto no reinicia el video porque YouTube mantiene el estado
    // cuando solo cambia el parámetro mute
    setSrc(buildSrc(false));
    setIsPlaying(true);
  };

  const pause = () => {
    setSrc(buildSrc(true)); // mute=1 — silencia sin detener
    setIsPlaying(false);
  };

  const toggle = () => (isPlaying ? pause() : play());

  const MusicPlayer = () => (
    <iframe
      ref={iframeRef}
      src={src}
      allow="autoplay; encrypted-media"
      title="bg-music"
      style={{
        position:      'fixed',
        width:         '1px',
        height:        '1px',
        opacity:       0,
        border:        'none',
        top:           0,
        left:          0,
        zIndex:        -999,
        pointerEvents: 'none',
      }}
    />
  );

  return { play, pause, toggle, isPlaying, MusicPlayer };
};
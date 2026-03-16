import {useState} from'react';
import { useYouTubeMusic } from './useYouTubeMusic.tsx';

export const useFlow = () => {
    const[showIntro, setShowIntro] = useState(true);
const music = useYouTubeMusic({
        videoId: 'beZyxFgRgc8', // ← Earth Angel — Back to the Future ✅
        // Sin startSeconds ni endSeconds = reproduce la canción completa en loop
    });
    const handleEnter = () => {
        setShowIntro(false);
        setTimeout(() => music.play(), 800);
    };
    return {showIntro, handleEnter, music, MusicPlayer: music.MusicPlayer};
};
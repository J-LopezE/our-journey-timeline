import {useState} from'react';

export const useFlow = () => {
    const[showIntro, setShowIntro] = useState(true);

    const handleEnter = () => {
        setShowIntro(false);
    };
    return {showIntro, handleEnter};
};
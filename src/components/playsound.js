import { useEffect } from 'react';
import { withSounds } from 'arwes';

const PlaySound = ({ children, sounds, sound }) => {
    useEffect(() => {
        sounds[sound].play();
    }, [sounds, sound]);
    return children;
};

export default withSounds()(PlaySound);
import { useEffect } from 'react';
import { withSounds } from 'arwes';

const PlaySound = ({ children, sounds, sound }) => {
    useEffect(() => {
        sounds[sound].play();
    }, []);
    return children;
};

export default withSounds()(PlaySound);
import { useEffect } from 'react';
import { withSounds } from 'arwes';

const InfoSound = ({ children, sounds }) => {
    useEffect(() => {
        sounds.info.play();
    }, []);
    return children;
};

export default withSounds()(InfoSound);
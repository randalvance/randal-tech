import React from 'react';
import { Button as ArwesButton, withSounds } from 'arwes';

const Button = ({ sounds, onClick, children, ...props }) => (
    <ArwesButton animate props={props}>
        {children}
    </ArwesButton>
);

export default withSounds()(Button);

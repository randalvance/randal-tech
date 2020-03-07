import React from 'react';
import { Link } from 'gatsby';
import { Words, Heading, withSounds } from 'arwes';
import { scale } from '../utils/typography';

const Header = ({ title, sounds }) => {
    const header = (
        <Heading node="h1"
            style={{
                ...scale(1.2),
                marginBottom: 0,
                marginTop: 0,
                textAlign: 'center',
            }}
        >
            <Link style={{ color: `inherit` }} to="/">
                <Words animate>{title}</Words>
            </Link>
        </Heading>
    );
    return (
        <header>{header}</header>
    );
};

export default withSounds()(Header);

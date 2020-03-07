import React from 'react';
import { Link } from 'gatsby';
import { scale, rhythm } from '../utils/typography';

const Header = ({ title }) => {
    const header = (
        <h1
            style={{
                ...scale(1.2),
                marginBottom: rhythm(1.5),
                marginTop: 0,
            }}
        >
            <Link
                style={{ color: `inherit` }}
                to="/"
            >
                {title}
            </Link>
        </h1>
    );
    return <header>{header}</header>;
};

export default Header;

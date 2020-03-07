import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import Button from '../components/button';

const navigationItems = [
    {
        link: '/',
        title: 'Home',
    },
    {
        link: '/blog',
        title: 'Blog',
    },
    {
        link: '/resume',
        title: 'Resume',
    },
    {
        link: '/reference',
        title: 'Reference',
    },
];
const NavBar = () => (
    <StyledNav>
        {navigationItems.map(navItem => (
            <NavLink
                key={navItem.link}
                to={navItem.link}
                title={navItem.title}
                activeClassName="active"
            >
                <Button>{navItem.title}</Button>
            </NavLink>
        ))}
    </StyledNav>
);

const StyledNav = styled.nav`
    margin: 0 0 ${rhythm(1.5)} 0;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const NavLink = styled(Link)`
    text-transform: uppercase;
`;

export default NavBar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
]
const NavBar = () => (
    <StyledNav>
        {navigationItems.map(navItem => (
            <NavLink to={navItem.link} title={navItem.title} activeClassName="active">
                {navItem.title}
            </NavLink>
        ))}
    </StyledNav>
);

const StyledNav = styled.nav`
    margin: 0 0 24px 0;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const NavLink = styled(Link)`
    text-transform: uppercase;
`;

export default NavBar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Row, Col } from 'arwes';

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
const NavBar = ({ location }) => {
    return (
        <StyledNav>
            <Row>
                {navigationItems.map(navItem => (
                    <Col m={3} s={6} style={{ padding: rhythm(0.25) }}>
                        <NavLink
                            key={navItem.link}
                            to={navItem.link}
                            title={navItem.title}
                        >
                            <Button style={{ width: '100%', textAlign: 'center' }}
                                {...(location.pathname === navItem.link ? { layer: 'success' } : {})}
                            >
                                {navItem.title.toUpperCase()}
                            </Button>
                        </NavLink>
                    </Col>
                ))}
            </Row>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    margin: 0 0 ${rhythm(0.25)} 0;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const NavLink = styled(Link)`
    display: block;
    text-transform: uppercase;
    min-width: 150px;
    width: 100%;
`;

export default NavBar;

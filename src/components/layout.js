import React from 'react';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';

import Header from './header';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    // @ts-ignore
    const rootPath = `${__PATH_PREFIX__}/`;

    // @ts-ignore
    const blogPath = `${__PATH_PREFIX__}/blog/`;
  
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header
            title={title}
            rootPath={rootPath}
            blogPath={blogPath}
          />
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;

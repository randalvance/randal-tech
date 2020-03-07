import React from 'react';
import styled from 'styled-components';
import {
    Arwes,
    Content,
    Footer as AresFooter,
    Link,
    Loading,
    ThemeProvider,
    SoundsProvider,
    createTheme,
    createSounds,
    createLoader,
} from 'arwes';

import { rhythm } from '../utils/typography';

import NavBar from './navbar';
import Header from './header';

const sounds = {
    shared: { volume: 1 },
    players: {
        info: { sound: { src: ['/sounds/information.mp3'] } },
        click: { sound: { src: ['/sounds/click.mp3' ] }},
    },
};

class Layout extends React.Component {
    state = {
      show: false,
      loaded: false,
    };

    loader = createLoader();

    componentDidMount() {
      this.startLoading();
    }
  
    render() {
        const { title, children } = this.props;
        const { show } = this.state;

        return (
            <ThemeProvider theme={createTheme()}>
                <SoundsProvider sounds={createSounds(sounds)}>
                    <Loading full animate show={!show} />
                    <Arwes
                        animate
                        background="/img/background.jpg"
                        pattern="/img/glow.png"
                        show={show}
                    >
                        <Wrapper>
                            <div
                                style={{
                                    marginLeft: `auto`,
                                    marginRight: `auto`,
                                    maxWidth: rhythm(24),
                                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                                }}
                            >
                                <NavBar />
                                <Header title={title} />
                                <main>
                                    <Content>{children}</Content>
                                </main>
                            </div>
                            <Footer animate>
                                © {new Date().getFullYear()}, Built with
                                {` `}
                                <Link href="https://www.gatsbyjs.org">Gatsby</Link>
                            </Footer>
                        </Wrapper>
                    </Arwes>
                </SoundsProvider>
            </ThemeProvider>
        );
    }

    startLoading() {
      this.loader.load({ images: ['/img/background.jpg', '/img/glow.png']})
        .then(() => this.setState({ show: true, loaded: true }));
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
`;

const Footer = styled(AresFooter)`
    text-align: center;
    vertical-align: middle;
`;

export default Layout;

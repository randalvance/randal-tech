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
        ask: { sound: { src: ['/sounds/ask.mp3'] } },
        info: { sound: { src: ['/sounds/information.mp3'] } },
        click: { sound: { src: ['/sounds/click.mp3'] } },
        deploy: { sound: { src: ['/sounds/deploy.mp3'] } },
    },
};

const imageUrls = ['/img/background.jpg', '/img/glow.png'];

// const soundUrls = [
//     '/sounds/deploy.mp3',
//     '/sounds/ask.mp3',
//     '/sounds/information.mp3',
//     '/sounds/click.mp3',
// ];

class Layout extends React.Component {
    state = {
        loading: true,
    };

    loader = createLoader();

    componentDidMount() {
        this.startLoading();
    }

    render() {
        const { title, children } = this.props;
        const { loading } = this.state;

        return (
            <ThemeProvider theme={createTheme()}>
                <SoundsProvider sounds={createSounds(sounds)}>
                    {loading ? (
                        <Loading full animate />
                    ) : (
                        <Arwes
                            animate
                            background="/img/background.jpg"
                            pattern="/img/glow.png"
                            show={!loading}
                            showResources={!loading}
                        >
                            <div
                                style={{
                                    marginLeft: `auto`,
                                    marginRight: `auto`,
                                    maxWidth: rhythm(24),
                                    minHeight: 'calc(100vh - 35px)',
                                    padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                                }}
                            >
                                <NavBar location={this.props.location} />
                                <Header title={title} />
                                <main style={{ padding: rhythm(1), paddingLeft: 0, paddingRight: 0 }}>
                                    <Content>{children}</Content>
                                </main>
                            </div>

                            <Footer animate>
                                © {new Date().getFullYear()}, Built with
                                {` `}
                                <Link href="https://www.gatsbyjs.org">
                                    Gatsby
                                </Link>
                            </Footer>
                        </Arwes>
                    )}
                </SoundsProvider>
            </ThemeProvider>
        );
    }

    startLoading() {
        this.loader
            .load({ images: imageUrls })
            .then(() => this.setState({ loading: false }));
    }
}

const Footer = styled(AresFooter)`
    text-align: center;
    vertical-align: middle;
`;

export default Layout;

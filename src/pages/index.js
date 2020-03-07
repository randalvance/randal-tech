import React from 'react';
import CreepyFace from 'react-creepyface';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Frame, Logo, Words, withSounds } from 'arwes';

import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PlaySound from '../components/playsound';
import { Centered } from '../components/styledComponents';

const IndexPage = ({ data, location, sounds }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
        <SEO
            title="Home"
            keywords={[`randal`, `cunanan`, `blog`, `javascript`, `react`]}
        />
        <Centered style={{ margin: `${rhythm(1.5)} 0` }}>
            <div style={{ position: 'relative', height: 250, width: 250  }}>
                <Logo animate size={250} style={{ position: 'absolute', left: 0, top: 0 }} />
                <CreepyFace
                    src="img/face.jpg"
                    style={{
                        borderRadius: '50%',
                        width: 200,
                        height: 200,
                        position: 'absolute',
                        left: 25,
                        top: 25,
                        transform: 'rotate(90deg)'
                    }}
                    options={{
                        hover: 'img/facehover.jpg',
                        looks: [
                            { angle: 0, src: 'img/face000.jpg' },
                            { angle: 45, src: 'img/face045.jpg' },
                            { angle: 90, src: 'img/face090.jpg' },
                            { angle: 135, src: 'img/face135.jpg' },
                            { angle: 180, src: 'img/face180.jpg' },
                            { angle: 225, src: 'img/face225.jpg' },
                            { angle: 270, src: 'img/face270.jpg' },
                            { angle: 315, src: 'img/face315.jpg' },
                        ]
                    }}
                />
                {/* <Image
                    style={{ position: 'absolute', left: 25, top: 25 }}
                    fixed={data.profileImage.childImageSharp.fixed}
                    alt={data.site.siteMetadata.author}
                    imgStyle={{
                        borderRadius: `50%`,
                    }}
                /> */}
            </div>
        </Centered>
        <article style={{ marginTop: rhythm(2) }}>
            <PlaySound sound="deploy">
                <Frame
                    animate
                    corners={3}
                    noBackground
                    style={{ padding: rhythm(1) }}
                >
                    <p>
                        <Words
                            animate
                        >{`How's it going! My name is Randal Vance Cunanan and I
                am a software developer with a passion on building cool things
                through coding. This website will contain my online resume,
                blogs posts related to software development, and personal notes
                and references such as list of libraries and tools.`}</Words>
                    </p>
                </Frame>
            </PlaySound>
        </article>
    </Layout>
);

export const pageQuery = graphql`
    query {
        profileImage: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`;

export default withSounds()(IndexPage);

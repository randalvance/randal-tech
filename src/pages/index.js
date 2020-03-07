import React from 'react';
import FadeIn from 'react-fade-in';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Centered } from '../components/styledComponents';

const IndexPage = ({ data, location }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
        <SEO
            title="Home"
            keywords={[`randal`, `cunanan`, `blog`, `javascript`, `react`]}
        />
        <Centered>
            <Image
                fixed={data.profileImage.childImageSharp.fixed}
                alt={data.site.siteMetadata.author}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
        </Centered>
        <article style={{ marginTop: 24 }}>
            <FadeIn transitionDuration={1000}>
                <p>
                    How's it going! My name is <em>Randal Vance Cunanan</em> and
                    I am a software developer with a passion on building cool
                    things through coding.
                </p>
                <p>
                    This website will contain my online resume, blogs posts
                    related to software development, and personal notes and
                    references such as list of libraries and tools.
                </p>
            </FadeIn>
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

export default IndexPage;

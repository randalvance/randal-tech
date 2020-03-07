import React from 'react';
import FadeIn from 'react-fade-in';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Centered } from '../components/styledComponents';

class IndexPage extends React.Component {
  render() {
    const siteTitle = 'Randal Vance Cunanan';

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`randal`, `cunanan`, `blog`, `javascript`, `react`]}
        />
        <StaticQuery
          query={bioQuery}
          render={data => (
            <>
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
                    How's it going! My name is <em>Randal Vance Cunanan</em> and I am a software
                    developer with a passion on building cool things through
                    coding.
                  </p>
                  <p>
                    This website will contain my online resume,
                    blogs posts related to software development,
                    and personal notes and references such as list of libraries and tools.
                  </p>
                </FadeIn>
              </article>
            </>
          )}
        />
        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    );
  }
}

const bioQuery = graphql`
  query BioQuery {
    profileImage: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default IndexPage;

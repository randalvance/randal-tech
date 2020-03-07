import React from 'react';
import { Link, graphql } from 'gatsby';

// import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

const Blog = ({ location, data }) => {
    // const posts = data.allMdx.edges;

    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <SEO title="All posts" />
            <h2>Blog Posts</h2>
            <div style={{ margin: '20px 0 40px' }}>
                Nothing to see here...YET!
                {/* {posts.map(({ node }) => {
                        const title =
                            node.frontmatter.title || node.fields.slug;
                        return (
                            <div key={node.fields.slug}>
                                <h3
                                    style={{
                                        marginBottom: rhythm(1 / 4),
                                    }}
                                >
                                    <Link
                                        style={{ boxShadow: `none` }}
                                        to={`blog${node.fields.slug}`}
                                    >
                                        {title}
                                    </Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node.frontmatter.description ||
                                            node.excerpt,
                                    }}
                                />
                            </div>
                        );
                    })} */}
            </div>
            <Link to="/">
                <Button marginTop="85px">Go Home</Button>
            </Link>
        </Layout>
    );
};

export default Blog;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

const Resume = ({ data, location }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
        <SEO title="Resume" />

        <h2>My Resume</h2>
        <div style={{ margin: '20px 0 40px' }}>Nothing to see here...YET!</div>

        <Link to="/">
            <Button marginTop="85px">Go Home</Button>
        </Link>
    </Layout>
);

export default Resume;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`;

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

const Reference = ({ data, location }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
        <SEO title="Reference" />

        <h2>Reference</h2>
        <div style={{ margin: '20px 0 40px' }}>Nothing to see here...YET!</div>

        <Link to="/">
            <Button marginTop="85px">Go Home</Button>
        </Link>
    </Layout>
);

export default Reference;

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

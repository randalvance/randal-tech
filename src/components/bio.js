import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Bio = ({ profileImage, author }) => {
    return (
        <Container>
            <Image
                fixed={profileImage.childImageSharp.fixed}
                alt={author}
                style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <p>
                Written by <strong>{author}</strong>
            </p>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

export default Bio;

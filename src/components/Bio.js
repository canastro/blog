import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {FaTwitter, FaStackOverflow, FaLinkedin} from 'react-icons/fa';
import {css} from '@emotion/core';

import {rhythm} from '../utils/typography';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        margin-bottom: ${rhythm(1)};
    `,
    social: css`
        display: flex;
        justify-content: space-around;
        width: 150px;
        align-self: center;
    `
};

const bioQuery = graphql`
    query BioQuery {
        site {
            siteMetadata {
                author
                social {
                    linkedin
                    stackoverflow
                    twitter
                }
            }
        }
    }
`;

/**
 * Builds the Bio section
 * @returns {React.ReactNode} node
 */
const Bio = () => (
    <StaticQuery
        query={bioQuery}
        render={(data) => {
            const {social} = data.site.siteMetadata;
            return (
                <div css={styles.root}>
                    <div css={styles.social}>
                        <a
                            title="twitter"
                            href={social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            title="linkedin"
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            title="stackoverflow"
                            href={social.stackoverflow}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaStackOverflow />
                        </a>
                    </div>
                </div>
            );
        }}
    />
);

export default Bio;

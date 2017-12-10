// @flow
import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import {rhythm} from '../utils/typography';

type Props = {
    data: Object;
}

export default (props: Props) => {
    const siteTitle = get(props.data, 'site.siteMetadata.title');
    const posts = get(props.data, 'allMarkdownRemark.edges');

    return (
        <div>
            <Helmet htmlAttributes={{lang: 'en'}} title={siteTitle} />
            <Bio />
            {posts &&
                posts.map(({node}) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                        <div key={node.fields.slug}>
                            <h3
                                style={{
                                    marginBottom: rhythm(1 / 4)
                                }}
                            >
                                <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                        </div>
                    );
                })}
        </div>
    );
};

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                author
                homeCity
            }
        }
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {draft: {ne: true}}}
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;

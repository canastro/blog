// @flow

import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

type Props = {
    data: Object,
    pathContext: Object
};

/**
 * Tag Pag template component
 * @method
 * @param   {Object} props - react props
 * @returns {Node} tags page
 */
export default (props: Props) => {
    const posts = props.data.allMarkdownRemark.edges;
    const {title} = props.data.site.siteMetadata;
    const postLinks = posts.map(post => (
        <li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </li>
    ));

    return (
        <div>
            <Helmet title={title} />
            <h2>
                {props.data.allMarkdownRemark.totalCount} posts tagged with {
                    props.pathContext.tag
                }
            </h2>
            <ul>{postLinks}</ul>
            <p>
                <Link to="/tags/">Browse all tags</Link>
            </p>
        </div>
    );
};

export const pageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {tags: {in: [$tag]}, draft: {ne: true}}}
        ) {
            totalCount
            edges {
                node {
                    fields {slug}
                    frontmatter {title}
                }
            }
        }
    }
`;

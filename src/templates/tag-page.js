// @flow

import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

type Props = {
    data: Object;
    pathContext: Object;
}

/**
 * Tag Pag template component
 * @extends React
 */
class TagRoute extends React.PureComponent {
    props: Props;

    /**
     * Returns the rendered component
     * @method  render
     * @returns {Node} Tag Page
     */
    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        const {title} = this.props.data.site.siteMetadata;
        const postLinks = posts.map(post => (
            <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
            </li>
        ));

        return (
            <div>
                <Helmet title={title} />
                <h2>
                    {this.props.data.allMarkdownRemark.totalCount} posts tagged with “{
                        this.props.pathContext.tag
                    }”
                </h2>
                <ul>{postLinks}</ul>
                <p>
                    <Link to="/tags/">Browse all tags</Link>
                </p>
            </div>
        );
    }
}

export default TagRoute;

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

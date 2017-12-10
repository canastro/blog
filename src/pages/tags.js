// @flow
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';

type Props = {
    data: Object;
}

/**
 * Page that lists all tags
 * @extends React
 */
class TagsPageRoute extends React.PureComponent {
    props: Props;

    /**
     * Renders the list tags page
     * @method  render
     * @returns {Node} Rendered component
     */
    render() {
        const {title} = this.props.data.site.siteMetadata;
        const allTags = this.props.data.allMarkdownRemark.group;

        return (
            <div>
                <Helmet title={title} />
                <div>
                    <h1>Tags</h1>
                    <ul>
                        {allTags.map(tag => (
                            <li key={tag.fieldValue}>
                                <Link
                                    style={{textDecoration: 'none'}}
                                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                                >
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TagsPageRoute;

export const pageQuery = graphql`
    query TagsQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000, filter: {frontmatter: {draft: {ne: true}}}) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;

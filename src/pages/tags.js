// @flow
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import injectSheet from 'react-jss';

const styles = {
    link: {textDecoration: 'none'}
};

type Props = {
    data: Object,
    classes: {[string]: string}
};

/**
 * Page that lists all tags
 * @method TagsPageRoute
 * @param  {Object}      props - react Props
 * @returns {Node} react node
 */
const TagsPageRoute = (props: Props) => {
    const {title} = props.data.site.siteMetadata;
    const allTags = props.data.allMarkdownRemark.group;

    return (
        <div>
            <Helmet title={title} />
            <div>
                <h1>Tags</h1>
                <ul>
                    {allTags.map(tag => (
                        <li key={tag.fieldValue}>
                            <Link
                                className={props.classes.link}
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
};

export default injectSheet(styles)(TagsPageRoute);

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

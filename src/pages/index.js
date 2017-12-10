// @flow
import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import Bio from '../components/Bio';
import {rhythm} from '../utils/typography';

const styles = {
    title: {marginBottom: rhythm(1 / 4)},
    link: {boxShadow: 'none'}
};

type Props = {
    data: Object,
    classes: {[string]: string}
}

/**
 * Main component
 * @method Main
 * @param  {Object} props - react Props
 * @returns {Node} react node
 */
const Main = (props: Props) => {
    const {data, classes} = props;
    const siteTitle = get(data, 'site.siteMetadata.title');
    const posts = get(data, 'allMarkdownRemark.edges');

    return (
        <div>
            <Helmet htmlAttributes={{lang: 'en'}} title={siteTitle} />
            <Bio />
            {posts &&
                posts.map(({node}) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                        <div key={node.fields.slug}>
                            <h3 className={classes.title}>
                                <Link className={classes.link} to={node.fields.slug}>
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

export default injectSheet(styles)(Main);

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
                        date(formatString: "DD MMMM, YYYY")
                        title
                    }
                }
            }
        }
    }
`;

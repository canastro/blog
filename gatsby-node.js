const path = require('path');
const _ = require('lodash');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('./src/templates/blog-post.js');
        const tagTemplate = path.resolve('./src/templates/tags.js');

        resolve(graphql(`
                {
                    allMarkdownRemark(
                        sort: {fields: [frontmatter___date], order: DESC}
                        limit: 1000
                    ) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    path
                                    tags
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
            if (result.errors) {
                console.log(result.errors);
                reject(result.errors);
            }

            // Create blog posts pages.
            const posts = result.data.allMarkdownRemark.edges;

            posts.forEach((post, index) => {
                const previous = index === posts.length - 1 ? null : posts[index + 1].node;
                const next = index === 0 ? null : posts[index - 1].node;
                const tags = post.node.frontmatter.tags.map(tag => ({
                    text: tag,
                    link: `/tags/${_.kebabCase(tag)}/`
                }));

                createPage({
                    path: post.node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {
                        tags,
                        slug: post.node.fields.slug,
                        previous,
                        next
                    }
                });
            });

            // Tag pages:
            let tags = [];
            // Iterate through each post, putting all found tags into `tags`
            _.each(posts, (edge) => {
                if (_.get(edge, 'node.frontmatter.tags')) {
                    tags = tags.concat(edge.node.frontmatter.tags);
                }
            });
            // Eliminate duplicate tags
            tags = _.uniq(tags);

            // Make tag pages
            tags.forEach((tag) => {
                createPage({
                    path: `/tags/${_.kebabCase(tag)}/`,
                    component: tagTemplate,
                    context: {
                        tag
                    }
                });
            });
        }));
    });
};

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: 'slug',
            node,
            value
        });
    }
};

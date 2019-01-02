import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

/**
 * Discus comments component
 * @extends Component
 */
class Disqus extends Component {
    /**
     * Callback method for when a new comment is added to disqus
     * @method  notifyAboutComment
     */
    notifyAboutComment = () => {
        console.log('new comment');
    };

    /**
     * Renders comments section
     * @method  render
     * @returns {Node} Discus component
     */
    render() {
        const {postNode, slug} = this.props;
        const post = postNode.frontmatter;
        const url = `https://canastro.github.io/blog${slug}`;

        return (
            <section>
                <header>Comments</header>
                <ReactDisqusComments
                    shortname="what-about-this"
                    identifier={post.title}
                    title={post.title}
                    url={url}
                    category_id={post.category_id}
                    onNewComment={this.notifyAboutComment}
                />
            </section>
        );
    }
}

Disqus.propTypes = {
    postNode: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired
};

export default Disqus;

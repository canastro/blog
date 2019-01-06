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
        const {frontmatter: postFrontmatter, location} = this.props;

        return (
            <ReactDisqusComments
                shortname="canastro-notes"
                identifier={postFrontmatter.slug}
                title={postFrontmatter.title}
                url={location.href}
                category_id={postFrontmatter.category_id}
                onNewComment={this.notifyAboutComment}
            />
        );
    }
}

Disqus.propTypes = {
    frontmatter: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default Disqus;

import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'gatsby';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #007acc',
        borderRadius: 5,
        padding: '0 5px',
        marginRight: 5,
        '&:hover': {
            backgroundColor: '#e6f5ff'
        }
    },
    a: {
        boxShadow: 'none',
        fontSize: '0.75rem'
    }
};

/**
 *
 * @param {Object} props - props
 * @returns {React.ReactNode} node
 */
const Tag = ({link, text}) => (
    <div css={styles.root}>
        <Link css={styles.a} to={link}>
            {text}
        </Link>
    </div>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Tag;

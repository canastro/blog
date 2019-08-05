import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';
import {Link} from 'gatsby';

const styles = {
    a: theme => css`
        display: flex;
        align-items: center;
        border: 1px solid ${theme.link};
        border-radius: 5px;
        padding: 0 5px;
        margin-right: 5px;
        box-shadow: none;
        font-size: 0.75rem;
    `
};

/**
 *
 * @param {Object} props - props
 * @returns {React.ReactNode} node
 */
const Tag = ({link, text}) => (
    <Link css={styles.a} to={link}>
        {text}
    </Link>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Tag;

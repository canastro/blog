import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';
import {Link} from 'gatsby';

import {palette} from '../utils/theme';

const styles = {
    root: css`
        display: flex;
        align-items: center;
        border: 1px solid ${palette.orange};
        border-radius: 5px;
        padding: 0 5px;
        margin-right: 5px;
        :hover {
            background-color: #4c5156;
        }
    `,
    a: css`
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

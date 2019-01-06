import React from 'react';
import PropTypes from 'prop-types';

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

const Tag = ({link, text}) => (
    <div css={styles.root}>
        <a css={styles.a} href={link}>
            {text}
        </a>
    </div>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Tag;

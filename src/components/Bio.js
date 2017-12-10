// @flow
import React from 'react';
import 'typeface-montserrat';
import 'typeface-merriweather';
import Twitter from 'react-icons/lib/fa/twitter';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Gravatar from 'react-gravatar';
import injectSheet from 'react-jss';

import {rhythm} from '../utils/typography';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: rhythm(2.5)
    },
    gravatar: {
        marginRight: rhythm(1 / 2),
        marginBottom: 0
    },
    social: {
        display: 'flex',
        justifyContent: 'space-around',
        width: 150,
        alignSelf: 'center'
    }
};

type Props = {
    classes: {[string]: string}
};

/**
 * Bop component
 * @method Bio
 * @param  {Object} classes - jss classes
 * @returns {Node} react node
 */
const Bio = ({classes}: Props) => (
    <div className={classes.root}>
        <div style={{display: 'flex'}}>
            <Gravatar
                className={classes.gravatar}
                size={75}
                email="ricardocanastro@gmail.com"
            />
            <p>
                <strong>&#x22;What about this?&#x22;</strong>, also known as{' '}
                <strong>&#x22;WAT?&#x22;</strong> is a software development (mainly javascript) blog
                written by <strong>Ricardo Canastro</strong> a Software Developer based in Porto,
                Portugal and currently working for Paddy Power Betfair.
            </p>
        </div>
        <div className={classes.social}>
            <a title="twitter" href="//www.twitter.com/canastro">
                <Twitter />
            </a>
            <a title="linkedin" href="//www.linkedin.com/in/ricardocanastro">
                <Linkedin />
            </a>
            <a title="stackoverflow" href="//stackoverflow.com/users/236205/canastro">
                <StackOverflow />
            </a>
        </div>
    </div>
);

export default injectSheet(styles)(Bio);

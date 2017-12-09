import React from 'react';
import 'typeface-montserrat';
import 'typeface-merriweather';
import Twitter from 'react-icons/lib/fa/twitter';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Gravatar from 'react-gravatar';

import { rhythm } from '../utils/typography';

export default () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: rhythm(2.5)
        }}
    >
        <div style={{ display: 'flex' }}>
            <Gravatar
                style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0
                }}
                size={75}
                email="ricardocanastro@gmail.com"
            />
            <p>
                <strong>"What about this?"</strong>, also known as <strong>"WAT?"</strong> is a
                software development (mainly javascript) blog written
                by <strong>Ricardo Canastro</strong> a Software Developer
                based in Porto, Portugal and currently working for Paddy Power Betfair.
            </p>
        </div>
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: 150,
                alignSelf: 'center'
            }}
        >
            <a href="//www.twitter.com/canastro">
                <Twitter />
            </a>
            <a href="//www.linkedin.com/in/ricardocanastro">
                <Linkedin />
            </a>
            <a href="//stackoverflow.com/users/236205/canastro">
                <StackOverflow />
            </a>
        </div>
    </div>
);

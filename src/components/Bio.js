import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Gravatar from 'react-gravatar'
import { FaTwitter, FaStackOverflow, FaLinkedin } from 'react-icons/fa'

import { rhythm } from '../utils/typography'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: rhythm(2.5),
  },
  gravatar: {
    marginRight: rhythm(1 / 2),
    marginBottom: 0
  },
  description: {
    flex: 1
  },
  social: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 150,
    alignSelf: 'center',
  },
}

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div style={styles.root}>
            <div style={{ display: 'flex' }}>
              <div style={styles.gravatar}>
                <Gravatar size={75} email="ricardocanastro@gmail.com" />
              </div>

              <p style={styles.description}>
                <strong>&#x22;Canastro's Notes&#x22;</strong>, is a software
                development (mainly javascript) blog written by{' '}
                <strong>{author}</strong> a Software Developer based in Porto,
                Portugal and currently working for dashdash.
              </p>
            </div>
            <div style={styles.social}>
              <a title="twitter" href={social.twitter}>
                <FaTwitter />
              </a>
              <a title="linkedin" href={social.linkedin}>
                <FaLinkedin />
              </a>
              <a title="stackoverflow" href={social.stackoverflow}>
                <FaStackOverflow />
              </a>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

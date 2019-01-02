import React from 'react'
import { Link } from 'gatsby'
import 'prismjs/themes/prism-okaidia.css'

import { rhythm, scale } from '../utils/typography'

const styles = {
  root: {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  },
  h1: {
    ...scale(1.5),
    marginBottom: rhythm(1.5),
    marginTop: 0,
  },
  h3: {
    fontFamily: `Montserrat, sans-serif`,
    marginTop: 0,
    marginBottom: rhythm(-1),
  },
  link: {
    boxShadow: `none`,
    textDecoration: `none`,
    color: `inherit`,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: rhythm(3 / 4),
    backgroundColor: '#000',
    color: '#fff',
  },
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 style={styles.h1}>
          <Link style={styles.link} to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 style={styles.h3}>
          <Link style={styles.link} to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <div style={styles.root}>
          {header}
          {children}
        </div>
        <footer style={styles.footer}>
          <span>
            © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </footer>
      </>
    )
  }
}

export default Layout

import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'
import styles from './layout.module.css'


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  let header = (
      <h1
        style={{
          fontFamily: `Montserrat, sans-serif`,
          ...scale(1.2),
          // marginBottom: rhythm(1.5),
          marginTop: 0,
          padding: 0,
          boxShadow: `none`,
          color: `inherit`,
          }}
         >
           Welcome to Jen's World!
      </h1>
    )

  return (
    <div
      style={{
        // color: `navy`,
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(25),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {/* <header>{header}</header> */}
      <header style={{ marginBottom: `1.5rem`}}>
        <Link to="/">
          <h3 className={styles.homeButton}>Home</h3>
          {/* <img style={{ marginLeft: `-15rem`, width: `60px`, height: `90px`, borderRadius: `100%`}} src={PG} alt="hi"/> */}
        </Link>
        <ul className={styles.rightLinks}>
          <ListLink to="/portfolio">Portfolio</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      {/* <h2 className={styles.line}>_________________________________________________</h2> */}
      </header>
        {/* _________________________________________________ */}
      <main style={{ margin: 0, padding: 0}}>{children}</main>
      <br></br>
      <footer style={{ color: `navy`, textAlign: `center`}}>
        Built by Jennifer Lindner with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a> © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout

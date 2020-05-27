import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  // if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          fontFamily: `Montserrat, sans-serif`,
          ...scale(1.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          boxShadow: `none`,
          color: `inherit`,
          }}
         >
           Welcome to Jen's World!
      </h1>
    )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(25),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {/* <header>{header}</header> */}
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: 'none'}}>
          <h3 style={{ display: `inline`, marginLeft: `-15rem`}}>Jen's World</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, marginRight: `-15rem` }}>
          <ListLink to="/portfolio">Portfolio</ListLink>
          <ListLink to="/about/">About Me</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <main>{children}</main>
      <br></br>
      <footer style={{ color: `white`, textAlign: `center`}}>
        Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a> © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout

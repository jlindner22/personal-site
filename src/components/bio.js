/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import Container from "./container"
import ParkGuell from "../../content/assets/IMG_9702.jpeg"
import { rhythm } from "../utils/typography"
import styles from './bio.module.css'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            github
          }
        }
      }
    }
  `)


  const { author, social } = data.site.siteMetadata
  return (
    <Container style={{ fontFamily: `Montserrat, sans-serif` }}>
      <div className={styles.outerDiv}>
        <div className={styles.divSpec}>
        <h2 style={{ marginTop: `0px`, fontVariant: `small-caps`}}>Hi, I'm Jen! <span>👋🏻</span></h2>
      <img className={styles.mainPic} src={ParkGuell}
         alt={author.name}
         />
        <h2 style={{ marginTop: `0px`, fontVariant: `small-caps`}}><span>🎊</span> Welcome to my personal site <span> 🎉</span></h2>
         <br></br>
         {/* <p>
        {` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          LinkedIn
        </a> {`  `}
        <a href={`https://github.com/${social.github}`}>
          GitHub
        </a>
      </p> */}
         </div> 
     </div>
    </Container>
  )
}

export default Bio;


// avatar: file(absolutePath: { regex: "/IMG_9702.jpeg" }) {
//   childImageSharp {
//     fixed(width: 50, height: 50) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }

   //  imgStyle={{
  //    borderRadius: `50%`,
  //  }}
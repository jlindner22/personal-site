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
import sledding from "../../content/assets/sledding.jpeg"
import { rhythm } from "../utils/typography"

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
    <Container>
    <div
      style={{
        // display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      {/* <img fluid={ParkGuell.childImageSharp.fluid} alt="" /> */}

      <img src={ParkGuell}
          // fixed={data.avatar.childImageSharp.fixed}
         alt={author.name}
         style={{
            width: `300px`,
            height: `400px`,

          //  marginRight: rhythm(1 / 2),
          //  marginBottom: 0,
          //  minWidth: 100,
           borderRadius: `100%`,
         }}
         imgStyle={{
           borderRadius: `50%`,
         }}
      />
      <p>
        {/* Written by <strong>{author.name}</strong>, {author.summary} */}
        {` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          LinkedIn
        </a> {`  `}
        <a href={`https://github.com/${social.github}`}>
          GitHub
        </a>
      </p>
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
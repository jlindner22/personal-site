import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from './blinddate.module.css'
import Matches from "../../content/assets/BlindDate_Matches.png"

    const User = props => (
        <div className={styles.user}>
          <div className={styles.description}>
          <h2 className={styles.name}>{props.name}</h2>
         <img src={props.screenshot} className={styles.screenshot} alt="thumbnail" />
            <p className={styles.excerpt}>{props.excerpt}</p>
          </div>
        </div>
      )

    export default function BlindDate(props) {

    return (
        <Layout location={props.location} title={props.siteTitle}>
        <SEO title="Jen Lindner" />
        <Container>
        <div style={{ color: `navy`}}>
        <Header headerText="BlindDate" />

            
        </div>
        {/* {props.title}
        <div style={{ color: `navy` }}>
        <Header headerText="My Portfolio" />
        <p> Feel free to <a href="mailto:jenlindner22@gmail.com">contact me </a>with any questions!</p>
        <User
                name="BlindDate"
                screenshot= {BlindDateHome}
                excerpt="A social/dating application that facilitates relationships without the bias of user photos"
                link='/blinddate/'
                />
                <User
                name="Connect Sindy"
                screenshot= {SindyHome}
                excerpt="A cow-themed version of Connect Four"
                link='/connectSindy/'
                />
                <br></br>
                <p>Check out my <a href={`https://github.com/jlindner22`}>GitHub</a> page to see what else I've been working on!</p>

    </div> */}

          <User
          name="Matches"
          screenshot= {Matches}
          excerpt="Users you have matched with"
          // link='/blinddate/'
          />
    </Container>
    </Layout>
  )
}
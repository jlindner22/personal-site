import React from "react"
import Header from "../components/header"
import styles from './portfolio.module.css'
import Container from "../components/container"
import Layout from "../components/layout"
import SindyHome from "../../content/assets/Connect_Sindy_Home.png"
import BlindDateHome from "../../content/assets/BlindDate_Home.png"
    
    const User = props => (
        <div className={styles.user}>
          <img src={props.avatar} className={styles.avatar} alt="thumbnail" />
          <div className={styles.description}>
            <h2 className={styles.name}>{props.name}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
          </div>
        </div>
      )

    export default function Portfolio(props) {

    return (
        <Layout location={props.location} title={props.siteTitle}>
        <Container>

        {props.title}
        <div style={{ color: `white` }}>
        <Header headerText="My Portfolio" />
        <p> Feel free to <a href="mailto:jenlindner22@gmail.com">contact me </a>with any questions!</p>
        <User
                name="BlindDate"
                avatar= {BlindDateHome}
                excerpt="A social/dating application that facilitates relationships without the bias of user photos"
                />
                <User
                name="Connect Sindy"
                avatar= {SindyHome}
                excerpt="A cow-themed version of Connect Four (two-player)"
                />
                <br></br>
                <p>Check out my <a href={`https://github.com/jlindner22`}>GitHub</a> page to see what else I've been working on!</p>

    </div>
    </Container>
    </Layout>
  )
}
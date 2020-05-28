import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

    // const User = props => (
    //     <div className={styles.user}>
    //      <img src={props.avatar} className={styles.avatar} alt="thumbnail" />
    //       <div className={styles.description}>
    //       <Link to={props.link}> <h2 className={styles.name}>{props.name}</h2></Link>
    //         <p className={styles.excerpt}>{props.excerpt}</p>
    //       </div>
    //     </div>
    //   )

    export default function connectSindy(props) {

    return (
        <Layout location={props.location} title={props.siteTitle}>
        <Container>
        <div>
            connectSindy
        </div>
        {/* {props.title}
        <div style={{ color: `navy` }}>
        <Header headerText="My Portfolio" />
        <p> Feel free to <a href="mailto:jenlindner22@gmail.com">contact me </a>with any questions!</p>
        <User
                name="BlindDate"
                avatar= {BlindDateHome}
                excerpt="A social/dating application that facilitates relationships without the bias of user photos"
                link='/blinddate/'
                />
                <User
                name="Connect Sindy"
                avatar= {SindyHome}
                excerpt="A cow-themed version of Connect Four"
                link='/connectSindy/'
                />
                <br></br>
                <p>Check out my <a href={`https://github.com/jlindner22`}>GitHub</a> page to see what else I've been working on!</p>

    </div> */}
    </Container>
    </Layout>
  )
}
import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

export default function Contact(props) {
    
    return (
        <Layout location={props.location} title={props.siteTitle}>
        <Container>

        {props.title}
        <div style={{ color: `white` }}>
        <Header headerText="Contact" />
        <p>Send me a message!</p>
        <p> <a href="mailto:jenlindner22@gmail.com">Jenlindner22@gmail.com</a>
        </p>
    </div>
    </Container>
    </Layout>
  )
}

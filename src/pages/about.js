import React from 'react'
import styles from './about.module.css'
import Container from '../components/container'
import Layout from "../components/layout"
import pic from "../../content/assets/IMG_9702.jpeg"

    const User = props => (
        <div className={styles.user}>
          <img src={props.avatar} className={styles.avatar} alt="" />
          <div className={styles.description}>
            <h2 className={styles.name}>{props.name}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
          </div>
        </div>
      )

      export default function About() {
        return (
            <Layout>
            <Container>
                <h1 style={{ color: `white` }}>About Me</h1>
                <User 
                name="Hi, I'm Jen!"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm an avid jigsaw puzzle solver, standup comedy viewer, chocolate consumer, dog lover, and aspiring software engineer."
                />
                <h2 style={{ color: `white`}}>Technical Skills</h2>
                <div style={{ color: `white`, fontWeight: `bold`, textAlign: `left` }}>
                 <li> JavaScript </li>
                 <li> React </li>
                 <li> Redux </li>
                 <li> Ruby on Rails </li>
                 <li> HTML </li>
                 <li> CSS </li>
                 <li> ...and I'm currently working on learning Python!</li>
                 </div>
                 <div>
                <img src={pic} alt="Hiii"/>
                </div>
            </Container>
            </Layout>
        )
      }
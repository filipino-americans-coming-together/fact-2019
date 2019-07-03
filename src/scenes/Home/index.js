import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'

import Schedule from './components/Schedule'

import styles from './styles.module.css'

const Home = () => (
  <>
    <Layout>
      <ImageHeader imageURL='/img/background.jpg'>
        <h2 className={styles.date}>2019</h2>
        <h1 className={styles.title}>Filipino-Americans Coming Together</h1>
        <h2 className={styles.subtitle}>Conference</h2>
      </ImageHeader>
      <Section>
        <Section.Title>About</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col md={12}>
                <p className='text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
      <Schedule/>
      <Section>
        <Section.Title>FACT 2018</Section.Title>
        <Section.Body>
          <Container>

          </Container>
        </Section.Body>
      </Section>
    </Layout>
  </>
)
export default Home

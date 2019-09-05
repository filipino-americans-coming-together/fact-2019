import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'

import YouTube from 'react-youtube'

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
              <Col
                md={12}
                lg={{ span: 10, offset: 1}}
              >
                <p className='text-black-50'>We unite Filipino-Americans. Filipino-Americans Coming Together (FACT) Conference brings together over 1000 Filipino-Americans from the Midwest and around the country into a weekend filled with lasting experiences at the University of Illinois at Urbana-Champaign (UIUC) campus. Through our workshops and variety show, you will rediscover your Filipino-American identity while feeling belonging in a larger community.</p>
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
            <Row>
              <Col
                lg={{span: 10, offset: 1}}
              >
                <Col md={6}>
                  <YouTube
                    videoId={'k6pGrTnh5uQ'}
                  />
                </Col>
                <Col md={6}>
                  <h3>TFCU </h3>
                </Col>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
    </Layout>
  </>
)
export default Home

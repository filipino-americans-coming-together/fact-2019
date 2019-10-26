import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UIButton from '../../UIComponents/UIButton'
import UICard from '../../UIComponents/UICard'
import UIYoutubeEmbed from '../../UIComponents/UIYoutubeEmbed'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'
import Footer from '../../components/Footer'

import styles from './styles.module.css'

const Landing = () => (
  <>
    <Layout>
      <ImageHeader imageURL='/img/background.jpg'>
        <h3 className={`animated fadeIn fontMoam ${styles.date}`}>2019</h3>
        <h2 className={`animated fadeIn fontMoam ${styles.title}`}>Filipino-Americans Coming Together</h2>
        <h3 className={`animated fadeIn fontMoam ${styles.subtitle}`}>Conference</h3>
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
      <Section>
        <Section.Body>
          <Container>
            <UICard>
              <UICard.Header>
                <UICard.Title>Register for FACT 2019</UICard.Title>
                <UICard.Subtitle>Nov 8th - Nov 10th</UICard.Subtitle>
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col 
                    className='mx-auto'
                    md={12}
                    lg={{ span: 4, offset: 4}}
                  >
                    <UIButton href='https://forms.gle/LkrFdZWTebziQugp8' target='_blank' block>Register</UIButton>
                  </Col>
                </Row>
              </UICard.Body>
            </UICard>
          </Container>
        </Section.Body>
      </Section>
      <Section>
        <Section.Title>Fact 2018 Recap</Section.Title>
        <Section.Body>
          <Container>
              <Col 
                className='mx-auto'
                md={12}
                lg={{ span: 10, offset: 1 }}
              >
                  <UIYoutubeEmbed videoId='k6pGrTnh5uQ'/>
                
              </Col>
          </Container>
        </Section.Body>
      </Section>
      <Footer/>
    </Layout>
  </>
)
export default Landing

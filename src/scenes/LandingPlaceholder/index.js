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

const TeamMember = ({name, position}) => (
  <Col 
    className='py-3 text-center'
    xs={6}
    md={4}
  >
    <h5 className='text-dark fontOpenSans' style={{ fontWeight: 700 }}>{name}</h5>
    <p className='fontOpenSans'>{position}</p>
  </Col>
)

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
                <UICard.Title>FACT 2018 Recap</UICard.Title>
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col 
                    className='mx-auto'
                    md={12}
                    lg={{ span: 10, offset: 1 }}
                  >
                      <UIYoutubeEmbed videoId='k6pGrTnh5uQ'/>
                    
                  </Col>
                </Row>
              </UICard.Body>
              
            </UICard>
          </Container>
        </Section.Body>
      </Section>
      <Section>
        <Section.Title>Team</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Row>
                  <TeamMember name='Anthony Mendez' position='Co-Coordinator' />
                  <TeamMember name='Denzel Cruz' position='Co-Coordinator' />
                  <TeamMember name='Erika Saligan' position='Co-Coordinator' />
                  <TeamMember name='Alpri Else' position='Information Technology' />
                  <TeamMember name='Caitlyn Anonuevo' position='Team FACT Manager' />
                  <TeamMember name='Carmel Bumaa' position='Marketing' />
                  <TeamMember name='David Ko' position='Media' />
                  <TeamMember name='Emily Oh' position='V-Show Co-Coordinator' />
                  <TeamMember name='Jasmine Cuasay' position='Hospitality' />
                  <TeamMember name='Molly Wong' position='Hospitality' />
                  <TeamMember name='Priscilla Nguyen' position='Team FACT Manager' />
                  <TeamMember name='Reggie Pagala' position='Campus Ambassador' />
                  <TeamMember name='Sonica Kagemiya' position='Marketing' />
                  <TeamMember name='Vincent Wu' position='V-Show Co-Coordinator' />
                </Row>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
      <Section>
        <Section.Body>
          <Container>
            <UICard background={`linear-gradient(45deg, rgba(216,245,157,1) 18%, rgba(236,255,206,1) 86%)`}>
              <UICard.Header>
                <UICard.Title className='text-dark'>Stay In Touch</UICard.Title>
                <UICard.Subtitle className='text-dark'>Get updates about FACT 2019</UICard.Subtitle>
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col 
                    className='mx-auto'
                    md={12}
                    lg={{ span: 4, offset: 4}}
                  >
                    <UIButton href='https://fact2019.typeform.com/to/W3Dw7G' target='_blank' block>Subscribe to Updates</UIButton>
                  </Col>
                </Row>
              </UICard.Body>
            </UICard>
          </Container>
        </Section.Body>
      </Section>
      <Footer/>
    </Layout>
  </>
)
export default Landing

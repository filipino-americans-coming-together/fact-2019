import React from 'react'

import UIYoutubeEmbed from '../../UIComponents/UIYoutubeEmbed'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
      <Section
      style={{
        background: `
        linear-gradient(45deg, rgba(241,164,232,1) 0%, rgba(200,178,223,1) 66%)`
      }}>
        <Section.Title className='text-white'>FACT 2018 Recap</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col 
                className='mx-auto'
                md={12}
                lg={{ span: 10, offset: 1 }}
              >
                  <UIYoutubeEmbed videoId='k6pGrTnh5uQ'/>
                
              </Col>
            </Row>
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
                  <TeamMember name='Jasmine Cuasay' position='Hospitality' />
                  <TeamMember name='Molly Wong' position='Hospitality' />
                  <TeamMember name='Priscilla Nguyen' position='Team FACT Manager' />
                  <TeamMember name='Reggie Pagala' position='Campus Ambassador' />
                  <TeamMember name='Sonica Kagemiya' position='Marketing' />

                </Row>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
      <Footer/>
    </Layout>
  </>
)
export default Landing

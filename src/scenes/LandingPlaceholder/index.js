import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'

import YouTube from 'react-youtube'
import styles from './styles.module.css'

const translucentBackground = {
  background: 'rgba(39,62,84,0.82)',
  zIndex: '2'
}

const TeamMember = ({name, position}) => (
  <Col 
    className='py-3'
    xs={6}
    md={4}
  >
    <h5>{name}</h5>
    <p className='Open Sans'>{position}</p>
  </Col>
)

const Landing = () => (
  <>
    <Layout>
      <ImageHeader imageURL='/img/background.jpg' style={translucentBackground}>
        <h2 className={`fontMoam ${styles.date}`}>2019</h2>
        <h1 className={`fontMoam ${styles.title}`}>Filipino-Americans Coming Together</h1>
        <h2 className={`fontMoam ${styles.subtitle}`}>Conference</h2>
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
      <Section>
        <Section.Title>FACT 2018 Recap</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col 
                className='mx-auto'
                md={12}
                lg={{ span: 10, offset: 1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <YouTube
                    videoId={'k6pGrTnh5uQ'}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
    </Layout>
  </>
)
export default Landing

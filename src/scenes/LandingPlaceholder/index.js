import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UICard from '../../UIComponents/UICard'
import UIYoutubeEmbed from '../../UIComponents/UIYoutubeEmbed'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'
import Footer from '../../components/Footer'

import styles from './styles.module.css'

const Event = ({ time, title, location, duration }) => (
 <div className='boxShadow' style={{
    background: `linear-gradient(215deg, rgba(241,164,232,1) 0%, rgba(200,178,223,1) 66%)`,
    borderRadius: '.5em',
    marginBottom: '.75em',
    marginTop: '.75em',
    padding: '.75em',
    paddingTop: '.5em',
    minHeight: `${3.4 * duration}em`,
    display: 'flex'
 }}>
    <div style={{
      flex: 2
    }}>
      <p 
        className='fontOpenSans p-0 m-0 text-white'
        style={{
          fontWeight: 900,
          fontSize: '.9em',
          textAlign: 'right'
        }}
      >{time}</p>
    </div>
    <div style={{
      flex: 3,
      paddingLeft: '1em'
    }}>
      <p
        className='fontOpenSans p-0 m-0 text-white'
        style={{
          fontWeight: 600,
          fontSize: '1em'
        }}
      >{title}</p>
      <p
        className='fontOpenSans p-0 m-0 text-white'
        style={{
          fontWeight: 300,
          fontSize: '1em'
        }}
      >{location}</p>
    </div>
 </div>
)

const Day = ({ day, events }) => (
  <div style={{ marginBottom: '2em' }}>
  <h3 
    style={{
      fontWeight: 200,
      paddingBottom: '.5em'
    }}
    className='text-center fontOpenSans'
  >{day}</h3>
  {(events || []).map(event => (
    <Event {...event}/>
  ))}
  </div>

)
const Agenda = () => (
  <Row>
    <Col md={{ span: 8, offset: 2 }} lg={{ span: 5, offset: 1}}>
    <Day day="Friday" events={[
      {
        time: "4:00 - 10:00pm",
        duration: 1,
        title: "Registration",
        location: "Asian American Cultural Center",
      },
      {
        time: "7:00 - 9:00pm",
        duration: 2,
        title: "Opening Ceremonies",
        location: "Gregory Hall Auditorium",
      }
    ]}/>
    </Col>
    <Col md={{ span: 8, offset: 2 }} lg={{ span: 5, offset: 0 }}>
    <Day day="Saturday" events={[
      {
        time: "8:30 - 9:30am",
        duration: 1,
        title: "Late Registration",
        location: "University YMCA",
      },
      {
        time: "9:00 - 9:40am",
        duration: .75,
        title: "Opening Session",
        location: "Lincoln Hall Theater",
      },
      {
        time: "9:55 - 11:00am",
        duration: 1.1,
        title: "Workshop Session I",
        location: "Assigned Location"
      },
      {
        time: "11:15am - 12:20pm",
        duration: 1.1,
        title: "Workshop Session II",
        location: "Assigned Location"
      },
      {
        time: "12:20 - 1:30pm",
        duration: 1.1,
        title: "Lunch",
      },
      {
        time: "1:45 - 3:00pm",
        duration: 1.25,
        title: "Workshop Session III",
        location: "Assigned Location"
      },
      {
        time: "3:15 - 4:15pm",
        duration: 1,
        title: "Meet the Facilitators & Wristband Pick-up",
        location: "Asian American Cultural Center"
      },
      {
        time: "5:00 - 7:00pm",
        duration: 2,
        title: "Variety Show",
        location: "Foellinger Auditorium"
      }
    ]}/>
    </Col>
  </Row>
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
                <UICard.Title>Register for FACT 2019</UICard.Title>
                <UICard.Subtitle>Nov 8th - Nov 10th</UICard.Subtitle>
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col lg={{ span: 6, offset: 3 }}>
                    <p className='text-white p-2' style={{ fontSize: '1.1em'}}>
                      Registration is now closed. However, we have onsite registration on Nov 9th! Attendees who register onsite will still be able to attend workshops and other conference activities, but will have limited workshop options.
                    </p>
                  </Col>
                </Row>
              </UICard.Body>
            </UICard>
          </Container>
        </Section.Body>
      </Section>
      <Section>
        <Section.Title>Conference Agenda</Section.Title>
        <Section.Body>
          <Container>
              <Col 
                className='mx-auto'
                md={12}
                lg={{ span: 10, offset: 1 }}
              >
                  <Agenda/>
                
              </Col>
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

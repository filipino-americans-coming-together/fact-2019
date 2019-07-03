import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Section from '../../../../components/Utils/Section'

import EventList from './components/EventList'
import Event from './components/Event'

import styles from './styles.module.css'

const Schedule = () => (
  <>
    <Section>
      <Section.Title>Schedule</Section.Title>
      <Section.Body>
        <Container>
          <Row className={styles.dayContainer}>
            <Col md={4}>
              <div className={`${styles.dayHeader}`}>
                <h2 className={styles.date}>Nov 9th</h2>
                <h3 className={styles.day}>Friday</h3>
              </div>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Registration'}
                  time={'16:00 - 22:00'}
                  location={'American Asian Cultural Center'}/>
                <Event
                  title={'Opening Reception'}
                  time={'16:00 - 22:00'}
                  location={'American Asian Cultural Center'}/>
              </EventList>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Opening Ceremonies'}
                  time={'19:00 - 21:00'}
                  location={'Lincoln Hall Auditorium'}/>
              </EventList>
            </Col>
          </Row>
          <Row className={styles.dayContainer}>
            <Col md={4}>
              <div className={`${styles.dayHeader}`}>
                <h2 className={styles.date}>Nov 10th</h2>
                <h3 className={styles.day}>Saturday</h3>
              </div>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Late Registration'}
                  time={'08:30 - 09:30'}
                  location={'American Asian Cultural Center'}/>
                <Event
                  title={'Opening Session'}
                  time={'09:00 - 09:30'}
                  location={'Lincoln Hall Theater'}/>
                <Event
                  title={'Workshop Session 1'}
                  time={'09:50 - 11:00'}/>
                <Event
                  title={'Workshop Session 2'}
                  time={'11:15 - 12:15'}/>
              </EventList>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Lunch Break'}
                  time={'12:20 - 13:20'}/>
                <Event
                  title={'Workshop Session 3'}
                  time={'13:45 - 15:00'}/>
                <Event
                  title={'Wristband Pick-Up'}
                  time={'15:15 - 16:30'}
                  location={'YMCA'}/>
                <Event
                  title={'Variety Show'}
                  time={'17:00 - 19:00'}
                  location={'Foellinger Auditorium'}/>
              </EventList>
            </Col>
          </Row>
          <Row className={styles.dayContainer}>
            <Col md={4}>
              <div className={`${styles.dayHeader}`}>
                <h2 className={styles.date}>Nov 11th</h2>
                <h3 className={styles.day}>Sunday</h3>
              </div>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Closing Ceremony'}
                  time={'10:00 - 12:00'}
                  location={'Lincoln Hall Auditorium'}/>
              </EventList>
            </Col>
          </Row>
        </Container>
      </Section.Body>
    </Section>
  </>
)
export default Schedule

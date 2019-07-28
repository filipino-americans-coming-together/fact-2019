import React from 'react'
import classNames from 'classnames'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'

import styles from './styles.module.css'

const Registration = () => {


  const renderForm = () => {
    return (
      <Form className={styles.form}>
        <Form.Group>
          <Form.Label className={styles.formLabel}>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Denzel'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className={styles.formLabel}>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Cruz'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className={styles.formLabel}>University Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='dcruz@illinois.edu'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className={styles.formLabel}>University</Form.Label>
          <Form.Control
            type='text'
            placeholder='University of Illinois at Urbana-Champaign'
          />
        </Form.Group>
        <Button
          className={styles.submit}
          block
        >
          Select Workshops
        </Button>
      </Form>
    )
  }
  return (
    <Layout>
      <Container className={styles.paddingTop}>
        <Col
          md={12}
          lg={{ span: 10, offset: 1 }}
        >
          <Card className={styles.card}>
            <Row>
              <Col
                className={styles.noRightPadding}
                md={6}
              >
                <Image fluid src='/img/register-bg.jpg'/>
              </Col>
              <Col
                className={styles.noLeftPadding}
                md={6}
              >
                <Section className={styles.formSection}>
                  <Section.Title>Register</Section.Title>
                  <Section.Subtitle>Get hyped, FACT 2019 is coming!</Section.Subtitle>
                  <Section.Body
                    className={styles.formSectionBody}
                  >
                    <Container>
                      { renderForm() }
                    </Container>
                  </Section.Body>
                </Section>
              </Col>
            </Row>
          </Card>
        </Col>
      </Container>
    </Layout>
  )
}

export default Registration

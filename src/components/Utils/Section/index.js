import React from 'react'
import classNames from 'classnames'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styles from './styles.module.css'

const Section = ({ children, className, ...rest }) => (
  <section className={classNames('py-5', className)} {...rest}>
    { children }
  </section>
)

Section.Title = ({ children, className, ...rest }) => (
  <Container className='text-dark'>
    <Col md={12}>
      <h1 className={
        classNames(
          'text-center letterSpacing animted fadeIn',
          className,
          styles.header
        )} {...rest}>{ children }</h1>
    </Col>
  </Container>
)

Section.Subtitle = ({ children, className, ...rest }) => (
  <Row>
    <Col md={12}>
      <h1 className={`text-center ${styles.subtitle}`} {...rest}>{ children }</h1>
    </Col>
  </Row>
)

Section.Body = ({ children, ...rest }) => (
  <div className={classNames('animated fadeIn', styles.body)} {...rest}>
    { children }
  </div>
)

export default Section

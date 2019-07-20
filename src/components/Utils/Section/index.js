import React from 'react'
import classNames from 'classnames'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

const Section = ({ children }) => (
  <section className={styles.section}>
    { children }
  </section>
)

Section.Title = ({ children }) => (
  <Row>
    <Col md={12}>
      <h1 className={`text-center ${styles.header}`}>{ children }</h1>
    </Col>
  </Row>
)

Section.Body = ({ children }) => (
  <div className={styles.body}>
    { children }
  </div>
)

export default Section

import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import styles from './styles.module.css'

const TeamMember = ({ name, year, major, position, bio, imageURL}) => (
  <>
    <Col
      md={{ span: 6 }}
      className={styles.member}
    >
      <Row>
        <Col
          md={6}
          className={styles.imageContainer}
        >
          <Image
            className={styles.image}
            src={`${process.env.PUBLIC_URL}${imageURL}`}
            fluid
          />
        </Col>
        <Col
          md={6}
          className={styles.infoContainer}
        >
          <div className={styles.headerContainer}>
            <h4 className={`${styles.name}`}>{ name }</h4>
            <h5 className={`text-black-50 ${styles.position}`}>
              { position }
            </h5>
          </div>
          <div className={styles.footerContainer}>
            <i className={`fab fa-instagram ${styles.icon}`}></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          md={12}
          className={styles.bio}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
    </Col>
  </>
)

export default TeamMember

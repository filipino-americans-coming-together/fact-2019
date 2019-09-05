import React from 'react'

import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

const ImageHeader = ({ imageURL, children }) => {
  const image = {
    background: `
    linear-gradient(30deg, rgba(241,164,232,.7) 18%, rgba(200,178,223,.5) 86%),
      no-repeat center url(${imageURL})
    `,
    backgroundSize: 'cover',
  }
  return (
    <div className={styles.background} style={image}>
      <Col md={12} className={`text-center fontMoam ${styles.titleContainer}`}>
        { children }
      </Col>
    </div>
  )
}
export default ImageHeader

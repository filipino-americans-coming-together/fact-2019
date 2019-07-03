import React from 'react'

import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

const ImageHeader = ({ imageURL, children }) => {
  console.log(imageURL)
  const image = {
    backgroundImage: `url(${imageURL})`
  }
  return (
    <div className={styles.background} style={image}>
      <Col md={12} className={`text-center ${styles.titleContainer}`}>
        { children }
      </Col>
    </div>
  )
}
export default ImageHeader

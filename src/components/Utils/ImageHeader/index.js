import React from 'react'

import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

const ImageHeader = ({ imageURL, children }) => {
  const image = {
    background: 'background: rgb(181,121,174)',
    background: `
      linear-gradient(0deg, 
        rgba(181,121,174,1) 0%, 
        rgba(181,121,174,0.3267682072829131) 52%, 
        rgba(200,178,223,0.2539390756302521) 100%),
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

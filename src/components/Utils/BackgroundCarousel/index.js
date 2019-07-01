import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const BackgroundCarousel = ({ images, overlay }) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * (images.length + 1)))

  useEffect(() => {
    let timerID = setInterval(() => tick(), 4000)

    const tick = async () => {
      setIndex((index + 1) % images.length)
    }

    return function cleanup() {
      clearInterval(timerID)
    }
  })
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/${images[index].src})`
  }
  return (
    <div className={styles.container}s>
      <div
        style={backgroundImage}
        className={styles.image}
        src={images[index].src}></div>
    </div>
  )
}

BackgroundCarousel.defaultTypes = {
  overlay: true
}

BackgroundCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })).isRequired,
  overlay: PropTypes.bool
}

export default BackgroundCarousel

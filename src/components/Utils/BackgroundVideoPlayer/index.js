import React from 'react'
import styles from './BackgroundVideoPlayer.module.css'

const BackgroundVideoPlayer = ({ video, overlay }) =>  (
  <div className={styles.container}>
    {
      overlay && <div className={styles.overlay}></div>
    }
    <video
      className={styles.video}
      playsInline="playsinline"
      autoPlay="autoPlay"
      muted="muted"
      loop="loop">
      <source src={video} type="video/mp4" />
    </video>
  </div>
)

export default BackgroundVideoPlayer

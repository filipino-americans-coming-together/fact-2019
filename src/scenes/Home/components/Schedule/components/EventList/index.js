import React from 'react'

import styles from './styles.module.css'

const EventList = ({ children }) => (
  <ul className={styles.eventList}>
    { children }
  </ul>
)
export default EventList

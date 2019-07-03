import React from 'react'

import styles from './styles.module.css'

const Event = ({ title, time, location }) => (
  <li className={styles.event}>
    <h4 className={styles.title}>{ title }</h4>
    <h4 className={styles.time}>{ time }</h4>
    <h5 className={`${styles.location} text-black-50`}>{ location }</h5>
  </li>
)
export default Event

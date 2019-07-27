import React from 'react'

import styles from './styles.module.css'

const Layout = ({ children }) => (
  <div className={styles.children}>
    { children }
  </div>
)
export default Layout

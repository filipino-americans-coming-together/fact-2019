import React from 'react'

import styles from './styles.module.css'

const Layout = ({ children, ...rest }) => (
  <div className={styles.children} {...rest}>
    { children }
  </div>
)
export default Layout

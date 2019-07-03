import React from 'react'

import Container from 'react-bootstrap/Container'

import styles from './styles.module.css'

const Layout = ({ children }) => (
  <div className={styles.children}>
    { children }
  </div>
)
export default Layout

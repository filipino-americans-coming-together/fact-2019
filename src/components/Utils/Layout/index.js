import React from 'react'

import Container from 'react-bootstrap/Container'

import styles from './styles.module.css'

const Layout = ({ children }) => (
  <Container>
    <div className={styles.children}>
      { children }
    </div>
  </Container>
)
export default Layout

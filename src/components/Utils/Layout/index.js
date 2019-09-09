import React from 'react'
import Helmet from 'react-helmet'

import styles from './styles.module.css'

const Layout = ({ children }) => (
  <div className={styles.children}>
    <Helmet>
      <title>FACT 2019 | Bringing Together Filipino-Americans</title>
      <meta name='description' content='Filipino-Americans Coming Together (FACT) Conference is an annual event that unites over 1000 Filipino-Americans in the Midwest on the University of Illinois at Urbana-Champaign campus. Through workshops and our V-Show you&apos;ll rediscover your Filipino identiy while being a part of a larget, united Filipino-American community.'/>
    </Helmet>
    { children }
  </div>
)
export default Layout

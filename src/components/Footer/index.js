import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

const Footer = () => (
  <footer className={classNames('text-center fontOpenSans', styles.footer)}>
    <p className='text-black-50'>Organized by the Philippine Student Association at the University of Illinois at Urbana-Champaign.<br/>Questions? Interested in sponsoring? Email us at <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">someemail@gmail.com</a></p>
  </footer>
)
export default Footer

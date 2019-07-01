import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

const Footer = () => (
  <>
    <footer className={classNames('text-center', styles.footer)}>
      <span>Organized by the Philippine Student Association at the University of Illinois at Urbana-Champaign.</span>
      <br/>
      <span>Questions? Interested in sponsoring? Email us at <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">someemail@gmail.com</a></span>
    </footer>
  </>
)
export default Footer

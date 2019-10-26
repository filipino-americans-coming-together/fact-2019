import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './styles.module.css'
const Navigation = () => (
  <Navbar bg="light" expand="lg" className={`${styles.nav} boxShadow`}>
    <Link to='/'>
      <Navbar.Brand className={styles.brand}>FACT Conference</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <li className='nav-item'>
          <Link
            className={`nav-link fontOpenSans ${styles.link}`}
            to='/'
          >Home</Link>
        </li>
        <li className='nav-item'>
          <Link 
            className={`nav-link fontOpenSans ${styles.link}`}
            to='/team'
          >Team</Link>
        </li>
        <li className='nav-item'>
          <Link 
            className={`nav-link fontOpenSans ${styles.link}`}
            to='/workshops'
          >Workshops</Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
export default Navigation

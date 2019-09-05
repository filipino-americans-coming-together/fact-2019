import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './styles.module.css'

const Navigation = () => (
  <Navbar variant='light' className={`${styles.nav} boxShadow`}>
    <Container>
      <Link to='/'>
        <Navbar.Brand className={styles.brand}>FACT Conference</Navbar.Brand>
      </Link>
      <Nav className='mr-auto'>
        <li className='nav-item'>
          <Link
            className={`nav-link fontOpenSans ${styles.link}`}
            to='/'
          >Home</Link>
        </li>
      </Nav>
      
    </Container>
  </Navbar>
)

/* <Link
        className={`nav-link`}
        to='/registration'>
        <Button variant='outline-dark' className='fontMoam disabled'>Register</Button>
      </Link> */

    //   <li className='nav-item'>
    //   <Link
    //     className={`nav-link fontQuandco disabled`}
    //     to='/team'
    //   >Team</Link>
    // </li>
    // <li className='nav-item'>
    //   <Link
    //     className={`nav-link fontQuandco disabled`}
    //     to='/workshops'
    //   >Workshops</Link>
    // </li>
      
export default Navigation

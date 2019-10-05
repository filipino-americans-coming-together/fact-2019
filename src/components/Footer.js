import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 2em;
`
const Footer = () => (
  <StyledFooter className='text-center fontOpenSans'>
    <p className='text-black-50'>Organized by the Philippine Student Association at the University of Illinois at Urbana-Champaign.<br/>Questions? Interested in sponsoring? Email us at <a href="mailto:fact@psauiuc.org?subject=Mail from Our Site">fact@psauiuc.org</a></p>
  </StyledFooter>
)
export default Footer

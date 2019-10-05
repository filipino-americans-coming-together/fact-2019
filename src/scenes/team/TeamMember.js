import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Member = styled.div`
  margin-bottom: 5em;
`

const ProfileImage = styled(Image)`
  margin-bottom: 0;
  border-radius: .75em;
  width: 100%;
`
const Name = styled.h4`
  font-size: 1.75em;
  font-weight: 700;
  font-family: 'Open Sans';
`

const Position = styled.h5`
  font-size: 1.75;
  font-weight: 700;
  font-family: 'Open Sans';
`

const Education = styled.h6`
  font-size: 1.2em;
  font-family: 'Open Sans';
`


const TeamMember = ({ name, year, major, position, bio, imageURL}) => (
  <Member
    data-aos="fade-up"
    data-aos-delay="0"
    data-aos-duration="300"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
  >
    <Col md={{ span: 10, offset: 1 }} className='d-none d-lg-block'>
      <Row>
        <Col md={{ span: 4, offset: 0}}>
          <div className='pb-5'>
            <ProfileImage src={`${process.env.PUBLIC_URL}${imageURL}`} fluid/>
          </div>
        </Col> 
        <Col md={8}>
          <Name>{name}</Name>
          <Position className='text-black-50'>{position}</Position>
          <Education className='text-black-50'>{`${year} studying ${major}`}</Education>
          <p className='pt-3'>{bio}</p>
        </Col>
      </Row>
    </Col>

    <div className='d-block d-lg-none'>
      <Name className='text-center'>{name}</Name>
      <Position className='text-center text-black-50'>{position}</Position>
      <Education className='text-center text-black-50 pb-3 '>{`${year} studying ${major}`}</Education>
      <Row>
        <Col xs={{span: 12}} sm={{span: 6, offset: 3}}>
          <div className='pb-2'>
            <ProfileImage src={`${process.env.PUBLIC_URL}${imageURL}`} fluid/>
          </div>
        </Col>
      </Row>
      <p className='pt-3' style={{ fontSize: '1.1em' }}>{bio}</p>
    </div>
  </Member>
)

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default TeamMember

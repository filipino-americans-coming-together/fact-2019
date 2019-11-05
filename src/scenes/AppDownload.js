import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import Layout from '../components/Utils/Layout'
import Section from '../components/Utils/Section'

import AppStoreLogo from '../assets/icons/app-store.png'
import GooglePlayLogo from '../assets/icons/google-play.png'

const AppDownload = () => {


  return (
    <Layout className='pt-5'>
      <Section>
        <Section.Title>Download Our Conference App!</Section.Title>
        <Section.Body>

          <Container className='pt-5'>
            <Col 
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 3 }}
 
            >
              <Row>
                <Col>
                  <a 
                    href='https://apps.apple.com/us/app/fact-2019/id1485682821' 
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <Image src={AppStoreLogo} fluid/>
                  </a>
                </Col>
                <Col>
                  <a 
                    href='https://play.google.com/store/apps/details?id=io.alprielse' 
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <Image src={GooglePlayLogo} fluid/>
                  </a>
                </Col>
              </Row>
            </Col>
          </Container>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default AppDownload
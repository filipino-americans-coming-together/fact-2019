import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import ImageHeader from '../../components/Utils/ImageHeader'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'

import styles from './styles.module.css'

const Workshop = ({ workshop }) => {
  const { name, facilitator, description, location } = workshop
  console.log(name)
  return (
    <Col
      className={styles.container}
      sm={12}
      md={6}
      xl={4}
    >
      <h5 className={styles.title}>{name}</h5>
      <h6 className={styles.facilitator}>{facilitator}</h6>
      <p className={styles.description}>{description}</p>
      <p className={styles.location}>Location: {location}</p>
    </Col>
  )
}

const Workshops = () => {
  const [requestedData, setRequestedData] = useState(false)
  const [recievedData, setRecievedData] = useState(false)
  const [workshops, setWorkshops] = useState([])

  useEffect(() => {
    const getData = async () => {
      setRequestedData(true)
      const response = await axios.get('/data/fact2018.json')
      setRecievedData(true)
      setWorkshops(response.data.workshops)
    }

    if (!requestedData) {
      getData()
    }
  })

  const [searchFilter, setSearchFilter] = useState('All Workshop Sessions')
  const handleSearchDropdownSelect = (e) => {
    console.log(e)
  }
  const renderSearchInput = () => {
    return (
      <Col
        className='mb-4'
        md={12}
        lg={{ span: 10, offset: 1 }}
      >
        <InputGroup>
          <DropdownButton
            title={searchFilter}
            as={InputGroup.Prepend}
            variant='outline-dark'
            onSelect={handleSearchDropdownSelect}
          >
            <Dropdown.Item eventKey='All Workshop Sessions'>All Workshop Sessions</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='Session 1'>Session 1</Dropdown.Item>
            <Dropdown.Item eventKey='Session 2'>Session 2</Dropdown.Item>
            <Dropdown.Item eventKey='Session 3'>Session 3</Dropdown.Item>
          </DropdownButton>
          <FormControl

          />
        </InputGroup>
      </Col>
    )
  }

  const renderCategoryFilter = () => {
    const categories = ['Dance', 'Culinary Arts', 'Relationships', 'Music', 'Professional Development', 'Cultural Identity']
    return (
      <Col
        className='mb-5'
        md={12}
        lg={{ span: 10, offset: 1 }}
      >
        <h5>Category</h5>
        <Container>
          <Row>
            { categories.map(category => {

              return (
                <div className={styles.category}>
                  <Button variant='outline-dark'>{category}</Button>
                </div>
              )
            })}
          </Row>
        </Container>
      </Col>
    )
  }

  const renderContent = () => {
    let content = null
    if (!recievedData) {
      content = (
        <Col
          className='text-center'
          md={12}
          lg={{ span: 8, offset: 2 }}
        >
          <h3>Loading...</h3>
        </Col>
      )
    } else {
      content = workshops.map(workshop => {
        return (
          <Workshop
            workshop={workshop}
            key={`${workshop.code}`}
          />
        )
      })
    }
    return content
  }

  return (
    <Layout>
      <ImageHeader imageURL='/img/background/15.jpg'/>
      <Section>
        <Section.Title>Workshops</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              { renderSearchInput() }
            </Row>
            <Row>
              { renderCategoryFilter() }
            </Row>
            <Row>
              { renderContent() }
            </Row>
          </Container>
        </Section.Body>
      </Section>
    </Layout>
  )
}
export default Workshops

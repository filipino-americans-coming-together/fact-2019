import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Row from 'react-boostrap/Row'
import Col from 'react-boostrap/Col'

import ImageHeader from '../../components/Utils/ImageHeader'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'

const getData = async () => {
  const response = await axios.get('/data/fact2018.json')
  return response.data.workshops
}

const Workshop = ({ workshop: {
  title,
  description,
  location,
  facilitator
}}) => {

  return (
    <Col
      sm={12}
      md={6}
    >
      <h3>{title}</h3>
      <h6>{facilitator}</h6>
      <p>{description}</p>
      <p>{location}</p>
    </Col>
  )
}

const Workshops = () => {
  const [requestedData, setRequestedData] = useState(false)
  const [recievedData, setRecievedData] = useState(false)
  const [workshops, setWorkshops] = useState([])

  useEffect(async () => {
    if (!requestedData) {
      setRequestedData(true)
      const data = await getData()
      setWorkshops(data)
      recievedData(true)
    }
  })

  return (
    <Layout>
      <ImageHeader imageURL='/img/team.jpg'/>
      <Section >
        <Section.Title>Workshops</Section.Title>
        <Section.Body>
          <Row></Row>
          <Row>
            { workshops.map(Workshop)}
          </Row>
        </Section.Body>
      </Section>
    </Layout>
  )
}
export default Workshops

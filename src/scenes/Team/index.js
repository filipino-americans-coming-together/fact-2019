import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'
import TeamMember from './components/TeamMember'

const Team = () => (
  <Layout>
    <ImageHeader imageURL='/img/team.jpg'>
      <h1>Organizing FACT Takes a Village</h1>
    </ImageHeader>
    <Section>
      <Section.Title>Team</Section.Title>
      <Section.Body>
        <Container>
          <Row>
            <TeamMember
              name='Aldrin Alvarez'
              position='Information Technology'
              imageURL='/img/fact-pack/AldrinAlvarez.jpg'
            />
            <TeamMember
              name='Angela Serrano'
              position='FACT Co-Coordinator'
              imageURL='/img/fact-pack/AngelaSerrano.jpg'
            />
            <TeamMember
              name='Cathlyn Ferolin'
              position='Team FACT Co-Manager'
              imageURL='/img/fact-pack/CathlynFerolin.jpg'
            />
            <TeamMember
              name='Clarissa Hernandez'
              position='FACT Co-Coordinator'
              imageURL='/img/fact-pack/ClarissaHernandez.jpg'
            />
            <TeamMember
              name='Denzel Cruz'
              position='Hospitality'
              imageURL='/img/fact-pack/DenzelCruz.jpg'
            />
            <TeamMember
              name='Holly Situ'
              position='Marketing'
              imageURL='/img/fact-pack/HollySitu.jpg'
            />
            <TeamMember
              name='Jayana Tabbilos'
              position='Hospitality'
              imageURL='/img/fact-pack/JayanaTabbilos.jpg'
            />
            <TeamMember
              name='Marianne Reyes'
              position='Campus Ambassador'
              imageURL='/img/fact-pack/MarianneReyes.jpg'
            />
          </Row>
        </Container>
      </Section.Body>
    </Section>
  </Layout>
)
export default Team

import React, { useState } from 'react'
import { TransitionMotion, spring } from 'react-motion';

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import WorkshopSession from './WorkShopSession'

import { EVENTS } from '../../constants/events'
import WorkshopList from '../../constants/workshops'

const ALL_WORKSHOPS = 'ALL_WORKSHOPS'

const getWorkshops = (filters) => {
  if (filters === undefined) {
    return WorkshopList
  }
  return WorkshopList.filter(workshop => {
    return workshop.session === filters.session || filters.session === ALL_WORKSHOPS
  })
}

const Workshops = () => {  
  const [focusedWorkshop, setFocusedWorkshop] = useState('') 
  const [searchFilter, setSearchFilter] = useState(ALL_WORKSHOPS)
  const handleSearchDropdownSelect = (eventKey) => {
    setSearchFilter(eventKey)
  }
  const renderSearchInput = () => {
    const translate = {
      [ALL_WORKSHOPS]: "All Workshop Sessions",
      [EVENTS.WORKSHOP_SESSION_01]: "Session 1",
      [EVENTS.WORKSHOP_SESSION_02]: "Session 2",
      [EVENTS.WORKSHOP_SESSION_03]: "Session 3",
    }
    return (
      <div
        className='mb-4 mx-auto'
      >
        <InputGroup>
          <DropdownButton
            title={translate[searchFilter]}
            as={InputGroup.Prepend}
            variant='outline-dark'
            onSelect={handleSearchDropdownSelect}
          >
            <Dropdown.Item eventKey={ALL_WORKSHOPS}>All Workshop Sessions</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item 
              eventKey={EVENTS.WORKSHOP_SESSION_01}
            >
              Session 1</Dropdown.Item>
            <Dropdown.Item 
              eventKey={EVENTS.WORKSHOP_SESSION_02}
            >
              Session 2</Dropdown.Item>
            <Dropdown.Item 
              eventKey={EVENTS.WORKSHOP_SESSION_03}
            >
              Session 3</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    )
  }

  const getDefaultStyles = () => {
    return getWorkshops().map(workshop => ({
      key: workshop.id,
      data: {
        ...workshop
      },
      style: {
        maxHeight: 0,
        opacity: 0
      }
    }))
  }

  const getStyles = () => {
    return getWorkshops({ session: searchFilter }).map(workshop => ({
      key: workshop.id,
      data: {
        ...workshop,
        handleClick: () => {
          if (workshop.id === focusedWorkshop) {
            setFocusedWorkshop('')
          } else {
            setFocusedWorkshop(workshop.id)
          }
        },
        isSelected: workshop.id === focusedWorkshop
      },
      style: {
        maxHeight: workshop.id === focusedWorkshop ? spring(2400) : spring(800),
        opacity: spring(1),
      }
    }))
  }

  return (
    <Layout style={{ paddingTop: '5vh'}}>
      <Section>
        <Section.Title>Workshops</Section.Title>
        <Section.Body>
          <Container>
            <Row className='pb-2'>
              { renderSearchInput() }
            </Row>
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <TransitionMotion
                  defaultStyles={getDefaultStyles()}
                  styles={getStyles()}
                  willEnter={() => ({
                    maxHeight: 0,
                    opacity: 0
                  })}
                  willLeave={() => ({
                    maxHeight: spring(0),
                    opacity: spring(0)
                  })}
                >
                  { props => (
                    <Row>
                      {
                        props.map(({ data, style }) => {

                          return (
                            <Col md={12} style={style}>
                              <WorkshopSession workshop={data}/>
                            </Col>
                          )
                        })
                      }
                    </Row>
                  )}
                </TransitionMotion>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
    </Layout>
  )
}
export default Workshops

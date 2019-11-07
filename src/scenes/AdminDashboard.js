import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import PostUpdateForm from '../components/admin/PostUpdateForm'

const AdminDashboard = () => {
 

  return (
    <div className='pt-5'>
      <Container className='pt-5 pb-5'>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <PostUpdateForm/>
            <Card className='m-2 p-3 pb-5'>
              <Card.Body>
                <h3 className='text-center fontOpenSans'>Send a Notification!</h3>
                <Form>
                  <Form.Group>
                    <Form.Label>Notifcation Title</Form.Label>
                    <Form.Control type='text' placeholder='Something very important is happening right now!'/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Notification Description</Form.Label>
                    <Form.Control as='textarea' type='textarea' placeholder='blah blah blah blah blah'/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='text'/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Notificaiton!
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default AdminDashboard
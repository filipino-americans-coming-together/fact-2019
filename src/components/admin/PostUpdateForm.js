import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const PostUpdateForm = () => {
  const [showModal, setShowModal] = useState(false)
  const [password, setPassword] = useState('')
  const [update, setUpdate] = useState({
    title: '',
    description: '',
    author: ''
  })
  const handleUpdateFieldChange = (field, e) => {
    setUpdate({
      ...update,
      [field]: e.target.value
    })
  }
  const handleSubmit = () => {
    setShowModal(false)
  }
  return (
    <Card className='m-2 p-3 pb-5'>
      <Card.Body>
        <h3 className='text-center fontOpenSans'>Post an update</h3>
        <Form onSubmit={e => e.preventDefault()}>
          <Form.Group>
            <Form.Label>Update Title</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Something very important is happening right now!'
              value={update.title}
              onChange={(e) => handleUpdateFieldChange('title', e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Update Description</Form.Label>
            <Form.Control 
              as='textarea' 
              type='textarea' 
              placeholder='blah blah blah blah blah'
              value={update.description}
              onChange={(e) => handleUpdateFieldChange('description', e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='ex: Alpri Else (IT)'
              value={update.author}
              onChange={(e) => handleUpdateFieldChange('author', e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='text'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
            onClick={() => setShowModal(true)}
          >
            Post Update!
          </Button>
          <Modal 
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Are you fucking sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You are about to send an update to over 1000 people. Please review this carefully!</p>
              <h4 className='fontOpenSans'>Title: {update.title}</h4>
              <h4 className='fontOpenSans'>Description: {update.description}</h4>
              <h4 className='fontOpenSans'>Author: {update.author}</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Yes, I'm Sure.
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default PostUpdateForm
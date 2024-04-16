import React from 'react'
import Navbars from "../Components/Navbars"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

const Registers = () => {
  return (
    <>
    <Navbars/>
    <br />
    <br />
    <br />
    <br />
    <Card style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <Card.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Hotel/Canteen" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address </Form.Label>
            <Form.Control placeholder="Street name, place" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>District</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Chennai</option>
                <option>Thiruvallur</option>
                <option>Madurai</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
          <p className="text-center">Having account? <a href="/logins" style={{ textDecoration: 'none' }}><span variant="primary">Sign in</span></a></p>

        </Form>
      </Card.Body>
    </Card>
    </>
  )
}

export default Registers
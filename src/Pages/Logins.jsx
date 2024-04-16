import React from 'react';
import Navbars from "../Components/Navbars";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const LoginPage = () => {
  return (
    <>
      <Navbars />
      <br />
      <br />
      <br />
      <br />
      <Card style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign in
            </Button> 
          <br />
          <br />
          <p className="text-center">Don't have an account?  <a href="/registers" style={{ textDecoration: 'none' }}><span variant="primary">Register</span></a></p>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginPage;

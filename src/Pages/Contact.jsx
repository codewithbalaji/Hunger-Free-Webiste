import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can handle form submission, such as sending data to a backend or displaying a success message
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <>
        <Navbars/>
        <br />
        <br />
        <br />
        <Container style={{backgroundColor: '#f8f9fa'}}>
          <Card style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2 className="text-center">Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Container>
        <Footer/>
      </>
    );
}

export default Contact;

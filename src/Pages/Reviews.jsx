import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
            name: 'Ruban',
            comment: 'This website is indeed beneficial and supportive, with a user-friendly interface, easy accessibility, and multifaceted assistance.'
        },
        {
            name: 'Monesh',
            comment: 'Hunger Free rocks! Seriously it like the easiest way ever to help out I just snap a pic of my extra food hit a button.'
        },
        {
            name: 'Karthi',
            comment: 'This website is very useful and helpful to needy people. It helps in many ways, is easy to access, and user-friendly. I work with it.'
        }
    ]);

    const [newReview, setNewReview] = useState({
        name: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name.trim() !== '' && newReview.comment.trim() !== '') {
            setReviews([...reviews, newReview]);
            setNewReview({ name: '', comment: '' });
        }
    };

    return (
        <>
            <Navbars />
            <Container>
                <h2 className="text-center mt-5 mb-4">Customer Reviews</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {reviews.map((review, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>{review.comment}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <h3 className="mt-5 mb-4">Add a Review</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={newReview.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your comment"
                            name="comment"
                            value={newReview.comment}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default Reviews;

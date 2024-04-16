import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../assets/needy.jpg';
import img3 from '../assets/vol.jpg';
import img1 from '../assets/grandpa.jpg';

function WhatWeDo() {
  return (
   
     <>
      <div className="text-center">
          <h2 className="display-5 mt-3" style={{ color: '#cc743e' }}>What we do?</h2>
        </div>
     <p className="text-center">We Help to reach food who really need for food & making sure no food goes waste! </p>
     <br />
        <br />
        <br />
        <Container>
        <Row>
        <Col xs={6}>
          <img src={img1} alt="Your Image" className="img-fluid" />
        </Col>
        <Col xs={6}>
          <h2 style={{ color: '#FF914D' }}>1. Contributors</h2>
          <br />
          <p style={{ fontSize:'18px'}}>
          At Hunger Free, we&aposre on a mission to turn surplus food into hope for those in need, and you can be a crucial part of this effort. As a contributor, you have the power to make a real impact in your community by sharing details about surplus food availability on our platform. Whether you&aposre an individual, a business, or an event organizer, your contribution matters. By joining us, you&aposll not only reduce food waste but also directly address food insecurity in your community. Signing up is easy, and with just a few clicks, you can start making a difference. Together, let&aposs create a world where no one goes hungry. Join us as a contributor today and become a Hunger Hero.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: '100px' }}></div>
      <Row>
        <Col xs={6}>
          <h2 style={{ color: '#FF914D' }}>2. Volunteer</h2>
          <br />
          <p style={{ fontSize:'18px'}}>
          This initiative involves mobilizing efforts to gather unused or leftover food from various sources, such as restaurants, grocery stores, and events. By collecting surplus food, the initiative aims to prevent wastage and redistribute it to disadvantaged individuals or communities facing hunger. This process relies on the generosity of donors who contribute their excess food for a charitable cause. Volunteers play a crucial role in facilitating the collection and distribution of surplus food to ensure it reaches those who require assistance the most. 
          </p>
        </Col>
        <Col xs={6}>
          <img src={img3} alt="Your Image" className="img-fluid" />
        </Col>
      </Row>
      <div style={{ marginBottom: '100px' }}></div> 
      <Row>
        <Col xs={6}>
          <img src={img2} alt="Your Image" className="img-fluid" />
        </Col>
        <Col xs={6}>
          <h2 style={{ color: '#FF914D' }}>3. Needy People</h2>
          <br />
          <p style={{ fontSize:'18px'}}>
          Through our innovative platform, we bridge the gap between surplus food and hungry mouths, connecting generous donors from hotels, canteens, and restaurants with local communities in need. By redistributing excess food that would otherwise go to waste, we not only fight hunger but also champion sustainability and environmental stewardship.
          </p>
        </Col>
      </Row>
      
    </Container>
     </>
 
  );
}

export default WhatWeDo;

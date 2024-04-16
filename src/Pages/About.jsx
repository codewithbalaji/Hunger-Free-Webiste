import { Container, Row, Col } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';


const About = () => {
  return (
    <>
     <Navbars />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2 className="text-center mb-4" style={{ color:'#FF914D'}}>About Us</h2>
                        <p style={{ fontSize:'18px'}}>
                        At Hunger Free, our dedication to eradicating hunger fuels everything we do. Through our innovative platform, we bridge the gap between surplus food and those in need, creating a seamless process of giving and receiving. Our contributors play a vital role by easily posting surplus food availability, whether they're individuals, businesses, or event organizers. Volunteers, the heart of our operation, step in to collect and distribute this food to communities facing food insecurity. The impact of our work is felt deeply by those like Sarah, an event organizer, who found it simple and rewarding to donate excess food through our platform. Mark, a committed volunteer, attests to the gratification of seeing the direct impact of his efforts.
                        </p>
                        <p style={{ fontSize:'18px'}}>
                        Beyond the individual stories, our platform offers significant advantages. Firstly, our streamlined process ensures that food reaches those in need swiftly and efficiently, minimizing delays and maximizing impact. Moreover, our community-driven approach fosters a sense of belonging and empowerment among contributors and volunteers alike, amplifying the reach of our efforts. And perhaps most importantly, by tackling both food waste and hunger simultaneously, we contribute to a more sustainable future for generations to come.
                        </p>
                        <p style={{ fontSize:'18px'}}>
                        But our work is far from over. With each passing day, new challenges arise, and more individuals fall into the cycle of hunger. That's why we invite you to join us in our mission. Together, we can be the change we wish to see in the world. Together, we can build a future where no one goes to bed hungry. Together, we can make a difference that reverberates far beyond the confines of our screens and into the lives of those who need it most.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
    </>    
  )
}

export default About
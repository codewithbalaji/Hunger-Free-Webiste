import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
   

function Navbars() {
  return (
    <Navbar bg="primary" sticky="top" expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/"><h2 className='text-light'>Hunger <span>Free</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='text-light animated-link' href="/"><b>Home</b></Nav.Link>
            <Nav.Link className='text-light animated-link' href="/about"><b>About Us</b></Nav.Link>
            <Nav.Link className='text-light animated-link' href="https://hungerfree-app.vercel.app/"><b>Our App</b></Nav.Link>
            <Nav.Link className='text-light animated-link' href="/reviews"><b>Reviews</b></Nav.Link>
            <Nav.Link className='text-light animated-link' href="/contact"><b>Contact us</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

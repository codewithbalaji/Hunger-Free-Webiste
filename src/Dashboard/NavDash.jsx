import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Button } from "react-bootstrap"
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function NavDash() {

  async function handleSignOut(){
    try{
      await signOut(auth);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Hunger Free</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dashboard
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/dashboard">Home</Nav.Link>
                  <Nav.Link href="/dashboard/users">Users</Nav.Link>
                  <Nav.Link href="/dashboard/posts">Posts</Nav.Link>
                  <Button variant="secondary" className='mt-3'  onClick={()=>{handleSignOut()}}>Sign Out</Button>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavDash;
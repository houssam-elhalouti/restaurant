import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../img/logo.png";

function Navbars(){

  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (window.scrollY > 50) {
      document.getElementById("nave").classList.add("shado");
    } else {
      document.getElementById("nave").classList.remove("shado");
    }
  }
 
  return (
        <div>
                <Navbar id='nave' expand="lg" className="body-tertiary" >
            <Container>
              <Navbar.Brand href="#home"><img src={logo} title='logo' alt='logo'/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">AboutUs</Nav.Link>
                  <Nav.Link href="#explore">Explore</Nav.Link>
                  <Nav.Link href="#reviews">Reviews</Nav.Link>
                  <Nav.Link href="#freqently">FAQ</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link  className='signup'>sign in</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )
} 

export default Navbars

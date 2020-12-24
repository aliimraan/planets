import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap'

export default function Header() {
    return (
        <div>
        <Navbar bg="dark" expand="lg">
        <Container>
        <Navbar.Brand href="/" style={{color:'white',fontSize:'2rem',fontWeight:'800',padding:'20px'}}>Planets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/myfavs" style={{color:'white',fontSize:'1.3rem'}}>Favourites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    )
}

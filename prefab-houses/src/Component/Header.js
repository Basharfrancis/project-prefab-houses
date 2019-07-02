import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


class Header extends React.Component  {
    render(){
        return(
          
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <div className= "navbar">
              <div className= "logo">
              <Navbar.Brand href="#Home"><img src={require('./logo1.png')} /></Navbar.Brand>
              </div>
              <div className="menu">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                  <Nav.Link href="#Home">Home</Nav.Link>
                  <NavDropdown title="Products" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.4">All Products</NavDropdown.Item>
                  <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">Kit-House</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Modular</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">SIP</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Panilized</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </div>
          </Navbar>
     
        )
  }    
}  

export default Header


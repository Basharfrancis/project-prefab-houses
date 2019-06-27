import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


class Header extends React.Component  {
    render(){
        return(
          
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className= "navbar">
              <div className= "logo">
              <Navbar.Brand href="#Home">Pre FabHouses</Navbar.Brand>
              </div>
              <div className="menu">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <NavDropdown title="Products" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">One Bed Room</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Two Bed Room</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Three Bed Room</NavDropdown.Item>
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


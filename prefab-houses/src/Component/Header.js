import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from "react-router-dom"



class Header extends React.Component  {
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <div className= "navbar">
              <div className= "logo">
              <Navbar.Brand href="#Home"><img src={process.env.PUBLIC_URL +"/logo2.png"}/></Navbar.Brand>
              </div>
              <div className="menu">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                  <Nav.Link href="#Home"><Link to='/'> Home </Link> </Nav.Link>
                  <NavDropdown title="Products" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.4"><Link to='/AllProductpage'>  All Products</Link>  </NavDropdown.Item>
                  <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">Kit-House</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Modular</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">SIP</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Panilized</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#About"> <Link to='/AboutPage'> About</Link> </Nav.Link>
                  <Nav.Link href="#Contact Us"><Link to='/Contactform'> Contact Us </Link> </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </div>
          </Navbar>
        )
  }    
}  

export default Header;


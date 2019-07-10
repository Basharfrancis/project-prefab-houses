import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from "react-router-dom"



class Header extends React.Component  {
  
    render(){
      function refreshPage(){ 
        window.location.reload(); 
    }
    
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <div className= "navbar">
              <div className= "logo">
              <Navbar.Brand href="#Home"><Link to='/'> <img src={process.env.PUBLIC_URL +"/logo2.png"}/></Link></Navbar.Brand>
              </div>
              <div className="menu">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                  <Nav.Link href="#Home"><Link to='/'> Home </Link> </Nav.Link>
                  <NavDropdown title="Products" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.4"><Link to='/AllProductspage'>  All Products</Link>  </NavDropdown.Item>
                  <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1" onClick={ refreshPage }><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Kit-Houses' } }} >Kit-House</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" onClick={ refreshPage}><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Modular' } }} > Modular</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={ refreshPage}><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'SIP' } }} >SIP</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5" onClick={ refreshPage}><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Panelized' } }} >Panilized</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#About"> <Link to='/AboutPage'> About</Link> </Nav.Link>
                  <Nav.Link href="#Contact Us"><Link to='/ContactPage'> Contact Us </Link> </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </div>
          </Navbar>
        )
  }    
}  

export default Header;

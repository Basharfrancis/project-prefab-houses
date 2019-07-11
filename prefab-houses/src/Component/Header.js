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
              <Navbar.Brand  ><Link to='/'> <img src={process.env.PUBLIC_URL +"/logo2.png"}/></Link></Navbar.Brand>
              </div>
              <div className="menu">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                  <Nav.Link ><Link to='/'> Home </Link> </Nav.Link>
                   <NavDropdown  title="Products" id="collasible-nav-dropdown">
                   <Link to='/AllProductspage'>  <NavDropdown.Item  ><Link to='/AllProductspage'>  All Products</Link>  </NavDropdown.Item></Link> 
                  <NavDropdown.Divider /> 
                  <Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Kit-Houses' } }} ><NavDropdown.Item   onClick={ refreshPage }><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Kit-Houses' } }} >   Kit-House  </Link></NavDropdown.Item></Link>
           <Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Modular' } }} > <NavDropdown.Item   onClick={ refreshPage}><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Modular' } }} > Modular</Link>  </NavDropdown.Item></Link>
                   <Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'SIP' } }} > <NavDropdown.Item   onClick={ refreshPage}><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'SIP' } }} > SIP</Link> </NavDropdown.Item></Link>
                   <Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Panelized' } }} > <NavDropdown.Item   onClick={ refreshPage}><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Panelized' } }} > Panilized </Link></NavDropdown.Item></Link>
                  </NavDropdown>
                  <Nav.Link  > <Link to='/AboutPage'> About</Link> </Nav.Link>
                  <Nav.Link  ><Link to='/ContactPage'> Contact Us </Link> </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </div>
          </Navbar>
        )
  }    
}  

export default Header;


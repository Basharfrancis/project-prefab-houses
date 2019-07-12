import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap';



class Header extends React.Component  {
  
    render(){
      function refreshPage(){ 
        // console.log('location 22', this.props.location)
        // window.location.reload(); 
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
                     <NavDropdown.Item  ><Link to='/AllProductspage' style={{display: 'block', width: '100%'}}>  All Products</Link>  </NavDropdown.Item>
                  <NavDropdown.Divider /> 
 
                             <NavDropdown.Item> <Link to={ '/SingleCategoryPage/Kit-Houses'}
                          style={{display: 'block', width: '100%'}}
                          > Kit Houses</Link> </NavDropdown.Item>

                            <NavDropdown.Item> <Link to={ '/SingleCategoryPage/Modular'}
                          style={{display: 'block', width: '100%'}}
                          > Modular</Link> </NavDropdown.Item>

                            <NavDropdown.Item> <Link to={ '/SingleCategoryPage/SIP'}
                          style={{display: 'block', width: '100%'}}
                          > SIP</Link> </NavDropdown.Item>

                          <NavDropdown.Item> <Link to={ '/SingleCategoryPage/Panelized'}
                          style={{display: 'block', width: '100%'}}
                          > Panelized</Link> </NavDropdown.Item>


                         
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


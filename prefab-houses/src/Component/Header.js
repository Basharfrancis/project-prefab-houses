import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';


class Header extends React.Component  {
    render(){
        return(
            <div className="header">
            <div className="container-fluied">
            <Row>
            
            <div class="col-sm-4">LOGO</div>

            
            <div class="col-sm-8">
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Project</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  <br />
  {/* <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
  {/* </Navbar> */}

  {/* <br />
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form> */}
  {/* </Navbar> */}
  </div>


</Row>
            </div> 
</div>


            
        );
    }
}
export default Header


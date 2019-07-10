import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



class Contactform extends React.Component  {
  render(){
      return(
<div className="contactform" >
<Form>
  <Form.Row>
 <Form.Group as={Col} controlId="formGridFullName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control placeholder="full name" />
  </Form.Group>

    <Form.Group   as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="enter email" />
    </Form.Group>
  </Form.Row>

  

  <Form.Group controlId="formGridPhoneNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="value" placeholder="phone number" />
  </Form.Group>

  <Form.Group controlId="exampleForm.Massage">
    <Form.Label>Massage</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="enter massage"/>
  </Form.Group>

  

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


</div>
     )
  }
}
export default Contactform;



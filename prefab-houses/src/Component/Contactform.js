import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



class Contactform extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      phoneNumber:'',
      email:'',
      message:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
handleChange = (event)=>{
      this.setState({[event.target.name]:event.target.value})
    
    }

async handleSubmit (event){
      // event.preventDefault();
      const {name, phoneNumber, email, message} = this.state
     
      
        const form = await fetch('http://localhost:8000/contact',
        {
          method:'POST',
      body:JSON.stringify({name, phoneNumber, email, message}),
    headers:{'Content-Type':'application/json'}
  })
      }

  render(){
      return(
<div className="contactform" >
<Form>
  <Form.Row>
 <Form.Group as={Col} controlId="formGridFullName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control name="name" placeholder="full name"  onChange={this.handleChange}/>
  </Form.Group>

    <Form.Group   as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control name="email" type="email" placeholder="enter email"  onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>

  

  <Form.Group controlId="formGridPhoneNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="value" placeholder="phone number" name="phoneNumber" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.Massage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="enter message" name="message" onChange={this.handleChange}/>
  </Form.Group>

  

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Submit
  </Button>
</Form>


</div>
     )
  }
}
export default Contactform;



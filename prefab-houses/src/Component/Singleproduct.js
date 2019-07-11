import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';



class Singleproduct extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      id: this.props.location.state.id,
    }
  }
    render() { 
        return (
 
   
 
<div>
  { this.props.data.filter(element=> element.id == this.state.id).map(data=>
    <Container>
    <Row>
    <CardDeck>
  <Card style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
    <Card.Img variant="top" src={"http://localhost:8000/"+data.image}/>
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
       Description : {data.description}<br/>
        Price: {data.price}<br/>
       construction_time: {data.construction_time}
      </Card.Text>
    </Card.Body>
  </Card>
   
  
  </CardDeck>
  
 
  </Row>
  <Button style={{marginTop: '30px'}} variant="secondary" size="lg" block>
  <Link to='/ContactPage'> Contact Us</Link>
  </Button>

  </Container>

  )}
    </div>
      );
      }
    }
  export default Singleproduct;
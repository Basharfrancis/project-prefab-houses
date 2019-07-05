import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Innerproductslist extends React.Component{
render(){
    return(<div>
    <Container>
    <Row>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src={process.env.PUBLIC_URL +"/kithouse.jpg"}/>
    <Card.Body>
      <Card.Title>TITLE :dfdfdfdf</Card.Title>
      <Card.Text>
       Description : dfdfdfdfdfdf<br/>
        Price: 98989898<br/>
       construction_time: 3322
      </Card.Text>
    </Card.Body>
  </Card>
   
  
  </CardDeck>
  
 
  </Row>
  </Container>

    </div>
    )
}
}
export default Innerproductslist;

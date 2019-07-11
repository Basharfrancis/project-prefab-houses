import React from "react";
import { Card, CardDeck } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" > 
      <CardDeck>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header>Contact info</Card.Header>
          <Card.Body>
            <Card.Text>
            Call us on +961 3 689674
            <br></br>
            Thoum el tahta
            <br></br>          
            Batroun, Lebanon
            <br></br>   
            <a href="https://goo.gl/maps/FT8dYV9bzrQ6eeqx8"> Adress on Goolge maps</a>


            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header>Social Media</Card.Header>
          <Card.Body>
            <Card.Text>
            <i class="fab fa-facebook-square"> <a href="https://www.facebook.com/Prefabhouses">  Facebook</a></i>
            <br></br>
            <i class="fab fa-instagram"> <a href="https://www.instagram.com/Prefabhouses">  Instagram</a></i>
            <br></br>
            <i class="fab fa-twitter-square"> <a href="https://www.twitter.com/Prefabhouses">  Twitter</a></i>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header>About</Card.Header>
          <Card.Body>
            <Card.Text>
            Our office employees are dedicated to satisfying all of our customers' needs. We will quote your projects for free, help you choose the products that will fit you better.
            </Card.Text>
          </Card.Body>
        </Card>

      </CardDeck>
      <div style={{marginTop: '30px', textAlign: 'center', fontSize: '15px'}}> all rights reserved @2019</div>
      </div>
    )
  }
}
export default Footer
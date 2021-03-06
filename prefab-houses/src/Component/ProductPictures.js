import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class ProductPictures extends Component {
    constructor(props) {
        super(props);
        this.state = {

          }


    
    }
    render() { 
        return ( 
      <div className = 'pic-slide l'>
          <Container> 
            <Row>
              <Col xs={6}>
          <Carousel autoPlay >
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                <p className="legend">Legend 5</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                <p className="legend">Legend 6</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                <p className="legend">Legend 7</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                <p className="legend">Legend 8</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                <p className="legend">Legend 9</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                <p className="legend">Legend 10</p>
              </div>
      </Carousel>
      </Col>
      <Col>
     <div className="title">
     <h2></h2>
     </div>
     <div className="description">
     <p></p>
     </div>
     </Col> 
     </Row>
      </Container>
  </div>
        );
      }
    }
  export default ProductPictures;
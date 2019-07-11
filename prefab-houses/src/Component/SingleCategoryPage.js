import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import "../App.css";
import {Link} from "react-router-dom";

import { throwStatement } from '@babel/types';


class SingleCategoryPage extends Component {
    constructor(props) {
        super(props);
       this.state= {
            category: this.props.location.state.category
        } 
        }
    componentDidMount(){
        console.log(this.props.location)
    }
    render() {
        
         return (
            
                 
            <div className="categoryy">
  
            {
                this.props.data.filter(element=> element.categorie == this.state.category).map(data=><div className="Card1">     
                  <Card >
                      
                    <Link to={{ 
                          pathname: '/Singleproduct',
                          state: {id: data.id}
                          }} ><Card.Img variant="top" src={data.image}/></Link>
                    <Card.Body>
                        <Card.Title>
                        {data.title}
                        </Card.Title>
                        <Card.Text>
                        {data.description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'Price: $'+data.price}</ListGroupItem>
                            <ListGroupItem>{'Time: '+data.construction_time}</ListGroupItem>
                           
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}
                
            </div>
             
        )
}
}
    
    export default SingleCategoryPage;

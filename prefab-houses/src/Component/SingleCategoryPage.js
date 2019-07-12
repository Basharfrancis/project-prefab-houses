import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import "../App.css";
import {Link} from "react-router-dom";

import { throwStatement } from '@babel/types';

const SingleCategoryPage = (props)=> {

    const {category} = props.match.params;
    return (
        
            <div className="categoryy">
  
            {
                props.data.filter(element=> element.categorie == category).map(data=><div className="Card1">     
                  <Card >
                      
                    <Link to={{ 
                          pathname: '/Singleproduct',
                          state: {id: data.id}
                          }} ><Card.Img variant="top" src={"http://localhost:8000/"+data.image}/></Link>
                    <Card.Body>
                        <Card.Title>
                        {data.title}
                        </Card.Title>
                        <Card.Text>
                        {data.description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'Price: €'+data.price}</ListGroupItem>
                            <ListGroupItem>{'Time: '+data.construction_time+' months'}</ListGroupItem>
                           
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}
                
            </div>
    )
}
    
    export default SingleCategoryPage;

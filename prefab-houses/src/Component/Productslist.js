import React, { Component } from "react";
//import Homepage from "./Component/Homepage.js"
// import modular from "public/modular.png";
// import Panelized from "/Panelized.png";
// import kithouse from "/kithouse.png";
// import SIP from "/SIP.png";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import {Link} from "react-router-dom";


const divStyle = {};
class Productslist extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
    
      <CardDeck className="deckgrid">
        <Card className="cardgrid">
        <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Kit-Houses' } }}  >
             <Card.Img variant="top" src={process.env.PUBLIC_URL +"/kithouse.jpg"} /></Link></a>
          <Card.Body>
           <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Kit-Houses' } }} >  <Card.Title>Kit-House</Card.Title></Link></a>
            <Card.Text>
              Kit houses go back to the old days when people bought houses in a
              catalog (think Sears houses), and they were shipped by train to
              the house site. However, kit houses today are far more
              sophisticated, efficient, and elaborate. All of the components for
              the house are built in the factory, numbered, and shipped to the
              site. Lindal Cedar Homes, a kit manufacturer in Washington State,
              ships their homes around the Unites States and around the world,
              including to Canada and Japan.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardgrid">
         <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Modular' } }} >  <Card.Img variant="top" src={process.env.PUBLIC_URL +"/modular.jpg"} /></Link></a>
          <Card.Body>
          <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Modular' } }} >  <Card.Title>Modular</Card.Title></Link></a>
            <Card.Text>
              Modular is one of the most complete types of prefab housing.
              Modules or boxes are built in the factory, and wrapped and taken
              by a flat-bed truck to the construction site. One or many modules
              are lifted by a crane and set on a foundation. Some modular homes
              are almost complete when they arrive at the site with siding,
              kitchen appliances, flooring, and so on; others need a good deal
              of work to complete at the site. In areas where labor is very
              expensive, completing more of the work in a factory in a less
              costly labor area is a fiscal benefit to the owner.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardgrid">
        <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'SIP' } }} ><Card.Img variant="top" src={process.env.PUBLIC_URL +"/SIP.jpg"} /></Link></a>
          <Card.Body>
          <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'SIP' } }} > <Card.Title>SIP</Card.Title></Link></a>
            <Card.Text>
              Structural Insulated Panels (SIPs) are another form of panelized
              construction. These are panels that generally have two oriented
              strand boards (OSB) that are fused with a type of insulating foam
              in the center. The boards are “locked” together and structural
              without the need for wood framing, which can be a vehicle for air
              infiltration. SIPs are extremely energy efficient, are installed
              very quickly, and require fewer interior walls, which creates a
              very open interior area.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardgrid">
        <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Panelized' } }} >  <Card.Img variant="top" src={process.env.PUBLIC_URL +"/Panelized.jpg"} /></Link></a>
          <Card.Body>
          <a href=""><Link to={{ 
                          pathname: '/SingleCategoryPage', 
                          state: { category: 'Panelized' } }} > <Card.Title>Panelized</Card.Title></Link></a>
            <Card.Text>
              Panelized construction is another popular type of prefab method.
              All of the exterior walls are installed on site like a jigsaw
              puzzle. Some panelized homes arrive on site with windows and doors
              installed and others have those parts installed on-site. Whether
              the components arrive with siding and roofing and other aspects
              can vary with each manufacturer and each home.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

export default Productslist;

import React, { Component } from "react";
//import Homepage from "./Component/Homepage.js"
// import modular from "public/modular.png";
// import Panelized from "/Panelized.png";
// import kithouse from "/kithouse.png";
// import SIP from "/SIP.png";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const divStyle = {};
class Productslist extends Component {
  render() {
    return (
      <CardDeck style={{display: 'grid', gridTemplateColumns: '1fr', gridRowGap: '20px'}}>
        <Card style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL +"/kithouse.jpg"} />
          <Card.Body>
            <Card.Title>Kit-House</Card.Title>
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
        <Card style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL +"/modular.jpg"} />
          <Card.Body>
            <Card.Title>Modular</Card.Title>
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
        <Card style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL +"/SIP.jpg"} />
          <Card.Body>
            <Card.Title>SIP</Card.Title>
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
        <Card style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL +"/Panelized.jpg"} />
          <Card.Body>
            <Card.Title>Panelized</Card.Title>
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

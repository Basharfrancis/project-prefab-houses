import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import AboutPage from "./Component/AboutPage";
import Contactform from "./Component/Contactform";
import AllProductspage from "./Component/AllProductspage";
import ContactPage from "./Component/ContactPage";
import SingleCategoryPage from "./Component/SingleCategoryPage";
import Singleproduct from "./Component/Singleproduct";
import Admin from "./Component/Admin"
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [],
       loading: true
      };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8000/api/users`);
    const json = await response.json();
    this.setState({ 
      data: json.data,
      loading: false
     });
    // console.log(this.state.data);
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/background2.jpg"})`
        }}
      >
        <Router>
          <div className="paddingpage">
            <Header />
            
            <Route
              path="/"
              exact
              render={routeProps => <Home/>}
            />
            <Route path="/AboutPage/" component={AboutPage} />
            <Route path="/ContactPage/" component={ContactPage} />
            <Route
              path="/AllProductspage/"
              exact
              render={routeProps => <AllProductspage {...routeProps} {...this.state} />}
            />
            <Route
              path="/SingleCategoryPage/"
              exact
              render={routeProps => <SingleCategoryPage {...routeProps} {...this.state} />}
            />
            <Route
              path="/Singleproduct/"
              exact
              render={routeProps => <Singleproduct {...routeProps} {...this.state} />}
            />
            {/* <Route path="/Admin/" component={Admin} /> */}
            <Route
              path="/Admin/"
              exact
              render={routeProps => <Admin arrayOfData={this.state.data} />}
            />



            
             
           
            <Footer />
          </div>
          <input type="file"></input>
        </Router>
      </div>
    );
  }
}
export default App;

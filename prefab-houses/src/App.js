import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import AboutPage from "./Component/AboutPage";
import Contactform from "./Component/Contactform";
import AllProductspage from "./Component/AllProductspage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:8000/api/users`);
    const json = await response.json();
    this.setState({ data: json.data });
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
              render={routeProps => <Home {...routeProps} {...this.state} />}
            />
            <Route path="/AboutPage/" component={AboutPage} />
            <Route path="/Contact Us/" component={Contactform} />
            <Route path="/All Products/" component={AllProductspage} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

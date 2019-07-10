import React,{Component} from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Singleproduct from "./Singleproduct"

class Singleproductpage extends Component{
    render(){
    return(<div className="App" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/background2.jpg"})`} }>
    <div className="paddingpage" >
    <Header/>
        <div className="clearfix">
        <Singleproduct />
        </div>
    <Footer/>
    </div>
       
        </div>
    )
}}
export default Singleproductpage;
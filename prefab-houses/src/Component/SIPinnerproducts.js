import React,{Component} from "react";
import '../App.css';
import Innerproductlist from "./Innerproductslist"
import Header from "./Header";
import Footer from "./Footer";



class SIPinnerproducts extends Component{
    render(){
    return(<div className="App" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/background2.jpg"})`} }>
    <div className="paddingpage" >
        <Header/>
        <div className="clearfix">
        <Innerproductlist />
        </div>
        <Footer/>
    </div>
       
        </div>
    )
}}
export default SIPinnerproducts;
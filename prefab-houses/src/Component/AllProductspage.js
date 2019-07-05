import React,{Component} from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Productslist from "./Productslist" 


class AllProductspage extends Component{

    render(){
    return(
   
    <div className="App" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/background2.jpg"})`} }>
    <div className="paddingpage" >
        <Header/>
        <div className="clearfix">
        <Productslist />
        </div>
        <Footer/>
    </div>
       
        </div>
        
    )
}}
export default AllProductspage;
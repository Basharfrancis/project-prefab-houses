import React,{Component} from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Productslist from "./Productslist" 


class AllProductspage extends Component{

    render(){
    return(
   
    <div className="App" >
    <div className="paddingpage" >
        {/* <Header/> */}
        <div className="clearfix">
            
        <Productslist data={this.props.data} />
        </div>
        {/* <Footer/> */}
    </div>
       
        </div>
        
    )
}}
export default AllProductspage;
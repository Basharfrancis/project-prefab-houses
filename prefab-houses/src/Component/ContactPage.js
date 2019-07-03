import React,{Component} from "react";
import '../App.css';
import Contactform from "./Contactform";
import Header from "./Header";
import Footer from "./Footer";


class ContactPage extends Component{
    render(){
    return(<div className="App">
    <div className="paddingpage" >
        <Header/>
        <Contactform/>
        <Footer/>
    </div>
       
        </div>
    )
}}
export default ContactPage;
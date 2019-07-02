import React,{Component} from "react";
import './App.css';
import Autoplay from './Component/Autoplay';
import Contactform from "./Component/Contactform";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

class App extends Component{
    render(){
    return(<div className="App">
    <div className="paddingpage" >
        <Header/>
        <Autoplay/>
        <Contactform/>
        <Footer/>
    </div>
       
        </div>
    )
}}
export default App;
import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Autoplay from './Component/Autoplay';
import Contactform from "./Component/Contactform";
import Header from "./Component/Header";

class App extends Component{
    render(){
    return(<div>
        <Header/>
        <Autoplay/>
        <Contactform/>
        </div>
    )
}}
export default App;
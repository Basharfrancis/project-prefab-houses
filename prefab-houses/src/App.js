import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Autoplay from './Component/Autoplay'

class App extends Component{
    render(){
    return(
        <div>
        <Header/>
        <Autoplay/>
        
        </div>
    )
}}
export default App;
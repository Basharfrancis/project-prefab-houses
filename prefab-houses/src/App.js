import React  from "react";
import logo from './logo.svg';
import './App.css';
import Autoplay from './component/Autoplay';
import Contactform from "./component/Contactform";

class App extends React.Component{
    render(){
    return(<div>

        <Autoplay/>
        <Contactform/>
        </div>
    )
}}
export default App;
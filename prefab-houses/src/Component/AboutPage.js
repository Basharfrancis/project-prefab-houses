import React,{Component} from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";


class AboutPage extends Component{
    render(){
    return(<div className="App"  >
    <div className="paddingpage" >
        <div className="clearfix">
        <img className="aboutimg" src={process.env.PUBLIC_URL +"/aboutimg.jpg"} />
        <p className="abouttext">This list takes a range of ranking criteria into consideration, including but not limited to: work history, customer satisfaction, awards and recognition, geographic area of work, cost, building permits, and clientele. We spent over 40 hours researching local contractors before calculating the final ranking for this post. If there is additional information about your business that could affect these rankings, please fill out this form and we will take it into consideration.</p>
        </div>
    </div>
       
        </div>
    )
}}
export default AboutPage;

import React,{Component} from "react";
import '../App.css';
import Contactform from "./Contactform";
import Header from "./Header";
import Footer from "./Footer";


class ContactPage extends Component{
    render(){
    return(<div className="App"  >
    <div className="paddingpage" >
        {/* <Header/> */}
        <div className="clearfix">
        <p className="textcontact">This list takes a range of ranking criteria into consideration, including but not limited to: work history, customer satisfaction, awards and recognition, geographic area of work, cost, building permits, and clientele. We spent over 40 hours researching local contractors before calculating the final ranking for this post. If there is additional information about your business that could affect these rankings, please fill out this form and we will take it into consideration.</p>
        <div className='container'>
       <div className='contitem'><Contactform/></div> 
       <div className='contitem'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.349745516037!2d35.77139326482369!3d34.49401658048814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f2509ee279b3%3A0x5b2c88eb432da58b!2sPalms+Island!5e0!3m2!1sen!2slb!4v1562141556223!5m2!1sen!2slb"  className="map" allowFullScreen></iframe>
        </div>
        </div>
        </div>
        {/* <Footer/> */}
    </div>
       
        </div>
    )
}}
export default ContactPage;
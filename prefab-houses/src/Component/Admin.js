import React,{Component, createRef} from 'react';
import '../App.css';
import axios from "axios";
import { async } from 'q';



class Admin extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      myRef : createRef(),  
       image: '',
       title: '',
       description: '',
       price: '',
       construction_time: '',
       categorie: '',
       id: '',
       editing: false,
       isAdd : true,
       isFunction: this.postRequest,
       addOrUpdate: "add"
    }
 
  }


 async deleteProduct(id) {
    const url = 'http://localhost:8000/api/user/'+id;
    const response = await fetch(url, {
			method: 'DELETE'
		});
 }

handleTaskChange = (event) => {
 
    this.setState({
        
      [event.target.name]: event.target.value       
     });
  }

postRequest = async () => {

  
 const {image, title, description, price, construction_time, categorie} = this.state;
  await axios.post("http://localhost:8000/api/user/", {
    image,
    title,
    description,
    price,
    construction_time,
    categorie
  });
}

 

patchRequest = async (index, event) => {
  
  const { image,title, description, price, construction_time, categorie } = this.state;
   await axios.patch("http://localhost:8000/api/user/"+index, {
    image,
    title,
    description,
    price,
    construction_time,
    categorie
  });
 
  this.setState({
    editing: false
  })

}

 
startEditing = (index, event) => {
  event.preventDefault();
  var myHouse;
  var data = this.props.arrayOfData;
  for (let i = 0; i < data.length; i++){
    if (data[i].id == index){
      myHouse = data[i]
      console.log(myHouse)
    }
  }
  console.log(data)
  window.scrollTo(0, this.state.myRef.current.offsetTop); 
  this.setState({
       editing: true,
       id: myHouse.id,
       image: myHouse.image,
       title:myHouse.title,
       description: myHouse.description,
       price: myHouse.price,
       construction_time: myHouse.construction_time,
       categorie: myHouse.categorie, 
       isFunction: ()=>this.patchRequest(this.state.id),
       addOrUpdate: "update",

   })
}

 

render(){

  return (
    <div>
      {this.props.arrayOfData.map((elementOfArray, index)=>
        <div>

        <form onSubmit={this.handleSubmit}> 

        <img src={elementOfArray.image}/>

        <p>title is: {elementOfArray.title}</p>

        <p>description is: {elementOfArray.description}</p>


        <p>price is: {elementOfArray.price}</p>


        <p>construction_time is: {elementOfArray.construction_time}</p>


        <p>categorie is: {elementOfArray.categorie}</p>


        <button type="submit" onClick={()=> this.deleteProduct(elementOfArray.id)} >delete</button>

         <button type="submit" onClick={(event)=> this.startEditing(elementOfArray.id, event)} >edit</button>

        </form>

         </div>
      )}
        <section ref={this.state.myRef}>
      <form>
        <ul  >
       <li> <input   name="image" placeholder="enter the link of the image"  value={this.state.image} onChange={this.handleTaskChange}></input></li> 
       <li> <input   name="title" placeholder="title" value={this.state.title} onChange={this.handleTaskChange}></input></li> 
       <li> <input   name="description" placeholder="description" value={this.state.description} onChange={this.handleTaskChange}></input></li> 
       <li> <input   name="price" placeholder="price" value={this.state.price} onChange={this.handleTaskChange}></input></li> 
       <li> <input   name="construction_time" placeholder="construction_time" value={this.state.construction_time} onChange={this.handleTaskChange}></input></li> 
       <li> <input   name="categorie" placeholder="categorie" value={this.state.categorie} onChange={this.handleTaskChange}></input></li> 
        </ul>

        {/* { this.state.isAdd ? <button type="submit" onClick={this.postRequest}>add</button> : <button type="submit" onClick={()=>this.patchRequest(this.state.id)}>Update</button>} */}
        {/* <button type="submit" onClick={this.postRequest} >{this.state.isAdd}</button>
        <button type="submit" onClick={()=>this.patchRequest(this.state.id)} >{this.state.isAdd}</button> */}
        <button onClick={this.state.isFunction}>{this.state.addOrUpdate}</button>

 
      </form>
      </section>

    </div>
  )
}
  
}

export default Admin;

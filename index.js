import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList(props) {
  const [person ,setPerson] = useState("")
  const [age , setAge] = useState("")
  const [location ,setLocation] = useState("")
  const [phone , setPhone] = useState("")

  const handleSubmit=(e)=>{
    props.handleSubmit({id:person,age:age,loc:location,phone:phone})
    setPerson("")
    e.preventDefault();
    
  }
  const handleChange=(e)=>{
    setPerson(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}className="form">
    <h1>
      Contact Manager
    </h1>
    <label htmlFor="Contact">contact</label>
    <input name="contact" type="text"  onChange={handleChange} placeHolder ="Enter the required contact" value={person} required ></input>

    <label htmlFor="age" >Age</label>
    <input type="number"  required placeHolder="Enter your Age" onChange={(e)=>setAge(e.target.value)}></input>

    <label htmlFor="location">Location</label>
    <input type="text" placeHolder="input location or zip code" onChange={(e)=>setLocation(e.target.value)}name="location" required />

    <label htmlFor="phone">Phone</label>
    <input type="tel" required placeHolder="input phone number" onChange={(e)=>setPhone(e.target.value)} />

    <button type="submit" >Submit</button>
    </form>
  )
}
const FullList = ()=>{
  const [contacts, changeCon]=useState([])
  const addCon =(e)=>{
    changeCon([e,...contacts])
  
  }
    return(
      <div>
      <MyList handleSubmit={addCon}></MyList>
      <table style={{width:"100%"}}>
      <th>Contact name</th>
      <th>Age</th>
      <th>Location</th>
      <th>Phone number</th>
      {contacts.map((e,index)=>{
        const{contact, age, loc,phone}= e;
        return(
          <tr>
          <td>{contact}</td>
          <td>{age}</td>
          <td>{loc}</td>
          <td>{phone}</td>
          </tr>
        )
      })}
      
      </table>
      </div>
    )
  
}


const el = <FullList/>; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);
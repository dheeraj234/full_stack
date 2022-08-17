import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
// import DisplayData from './DisplayData';
import Display from './Display';

const Form = () => {
    var [formData, setFormdata]=useState({name:" ",email:" ",age:0});
    const submit_1=(e)=>{
        e.preventDefault();
        console.log(formData.name+""+formData.email+""+formData.age);
        // <DisplayData data={formData}/>
        console.log("hello");
      }
      var {name,email,age}=formData;
  return (
      <div>
      <div>
        <form onSubmit={submit_1}>
      <div>
        <label>name:</label>
        <input type="text" value={formData.name} onChange={e => setFormdata({...formData,name:e.target.value})} ></input>
      </div>
      <div>
        <label>email:</label>
        <input type="text" value={formData.email} onChange={e => setFormdata({...formData,email:e.target.value})}></input>
      </div>
      <div>
        <label>age:</label>
        <input type="number" value={formData.age} onChange={e => setFormdata({...formData,age:e.target.value})}></input>
      </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
      </div>
      <Link to={`/Display?name=${name}&email=${email}&age=${age}`}>click display</Link>
      </div>
  );
}

export default Form;
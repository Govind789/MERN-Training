import React from "react";
import { useState } from "react";
import NavBar from "../common/navBar/navBar.js"

const Signup = ()=> {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const handleClick = async () =>{
        console.log(email,password);
        if(!email && !password){
            return;
        }
        const res = await fetch(`${process.env.BACKEND_URL}/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        console.log(data);
    }
  return (
    <div>
        <NavBar page = 'signup'/>
        <div>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleClick}>Signup</button>
        </div>
    </div>
  )
}

export default Signup;
import React, { useState } from 'react'

const Signup = () => {
    const [data,setData]=useState({
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const{userName,email,password,confirmPassword}=data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();
        if(userName.length<5){
            alert("Username atleast contain 5 characters");
        }
        else if(password !== confirmPassword){
           alert("Passwords are not matching");
        }
        else{
            console.log(data);
        }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <center>
                <input type="text" name="userName" value={userName} onChange={changeHandler}/><br/><br/>
                <input type="email" name="email" value={email} onChange={changeHandler}/><br/><br/>
                <input type="password" name="password" value={password} onChange={changeHandler}/><br/><br/>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/><br/>
                {password!==confirmPassword?<p style={{"color":"red"}}>** Passwords are not matching</p>:null}
                <input type="submit" name="submit"></input><br/><br/>
            </center>
        </form>
    </div>
  )
}

export default Signup
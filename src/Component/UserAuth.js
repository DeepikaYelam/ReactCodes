import React, {useState} from 'react'
import { auth } from './Firebase';
const UserAuth = () => {
    const [data,setData]=useState({
        "username":"",
        "password":""
    })
    const {username,password}=data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(username,password).then(
            user => console.log(user)
            ).catch(err => console.log(err))
        // console.log(data);

    }
    const signIn = e =>{
        e.preventDefault();
        // console.log(data);
    }
  return (
    <div>
        <center>
            <form autoComplete="off">
                <h4 style={{color:'blue'}}>User Authentication</h4><br/>
                <input type="text" name="username" placeholder="User Name" value={username} onChange={changeHandler}/><br/><br/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={changeHandler}/><br/><br/>
                <button onClick={signIn} className='btn btn-primary'>Sign In</button>&nbsp;&nbsp;
                <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
            </form>

        </center>
    </div>
  )
}

export default UserAuth
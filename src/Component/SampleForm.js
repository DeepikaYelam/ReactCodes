import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const SampleForm = () => {
    const [data,setData]=useState({
        userName:'',
        password:'',
        email:'',
      })
      const{name,password,email}=data;
      const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
      }
      const submitHandler = e => {
        e.preventDefault();
        console.log(data);
      }
  return (
    <div>
        <center>
          <Link to="/form">
              <form onSubmit={submitHandler}>
              UserName: <input type="text" name="userName" value={name} onChange={changeHandler}/><br/><br/>
              Password:<input type="password" name="password" value={password} onChange={changeHandler}/><br/><br/>
              Email:<input type="email" name="email" value={email} onChange={changeHandler}></input><br/><br/>
              <input type="submit" name="Submit"></input> 
              </form>
          </Link>
        </center>
    </div>
  )
}

export default SampleForm
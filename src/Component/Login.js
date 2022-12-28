import React, {useState} from 'react'

const Login = () => {
    const[data,setData]=useState({
        userName:'',
        password:''
    })
    const{userName,password}=data;
    const changeHandler = e => {
        setData({...data,[e.taget.name]:e.target.value});
    }
  return (
    <div>
        <center>
            <form>
                Username:<input type="text" name="userName" value={userName} onChange={changeHandler}/><br/>
                Password:<input type="password" name="password" value={password} onChange={changeHandler}/>
            </form>
        </center>
    </div>
  )
}

export default Login
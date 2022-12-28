import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Onclickexample = () => {
const[name,setName]=useState("Deepika");
  const[count,setCount]=useState(0);
  const[user,setUser]=useState("");
  const handler=e=>{
    setUser(e.target.value);
  }
  return (
    <div>
        <center>
            <Link to="/click">
                <h1>{name}</h1>
                <h2>{count}</h2>
                <button onClick={()=>setName("Deepika Yelam")}>Refresh</button>&emsp;&emsp;
                <button onClick={()=>setCount(count+1)}>Check Count</button>&emsp;&emsp;
                <input type="text" placeholder='user name' value={user} name="user" onChange={handler}></input><br/>
                {user}
            </Link>
        
        </center>
    </div>
  )
}

export default Onclickexample
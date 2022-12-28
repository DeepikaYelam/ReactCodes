import React, {useEffect, useState} from 'react'
import EmojiData from './Emogi.json'
import { Link } from 'react-router-dom';

const Emoji = () => {
    const[search,setSearch]=useState('');
    const[data,setData]=useState([]);
    const changeHandler = e => {
        setSearch(e.target.value);
    }
    useEffect( () => {
        const getData=EmojiData.filter(emoji=>emoji.title.toLowerCase().includes(search.toLowerCase()));
        setData(getData);
        // console.log(search);
    },[search])
    // const submitHandler 
  return (
    <div>
        
        <form>
            <center>
                <h1 style={{"color":"blue"}}>Emoji Search</h1><br/>
                <input type="text" name="search" value={search} onChange={changeHandler}/><br/><br/>
                <Link to="/"><button className='btn btn-primary'>Home</button></Link>
            </center><br/>
            {/* {EmojiData.map(emoji=><li>{emoji.symbol}{emoji.title}</li>)} */}
            {data.map(emoji=><div>
                <div className="card">
                    <div className="card-body" onClick={()=>{navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copied Successfully")}}>
                        {emoji.symbol}{emoji.title}
                    </div>
                </div>
            </div>)}
        </form>
    </div>
  )
}

export default Emoji
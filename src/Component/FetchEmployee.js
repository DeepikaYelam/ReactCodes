import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchEmployee = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8086/song/songs").then(
            response => setData(response.data)
    )},[])
  return (
    <div>
        {data}
        
    </div>
  )
}

export default FetchEmployee
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import info from './city.json'

const About = () => {
  const [search,setSearch]=useState('');
  return (
    <div>
        <center>
            <Link to="/about"><h2>This is about us page!!! </h2></Link><br/><br/>
            <h4>Enter Your City: </h4>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br/><br/>
            {info.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city =>{
              return <div style={{"border":"1px solid black", "padding":"10px","maxWidth":"70%"}}>
                {city.name}</div>
            })}<br/><br/>
            <Link to="/"><button className="btn btn-success">Home</button></Link>&emsp;&emsp;
            <Link to="/dashboard"><button className="btn btn-success">Dashboard</button></Link>&emsp;&emsp;
            <Link to="/cal"><button className="btn btn-success">Calculator</button></Link>
        </center>
    </div>
  )
}

export default About
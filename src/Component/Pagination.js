import axios from 'axios';
import React,{useState,useEffect} from 'react'
import PageNubers from './PageNubers';
import { Link } from 'react-router-dom';

const Pagination = () => {
    const[data,setData]=useState([]);
    const[perPage,setPerPage]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => {setData(response.data);setPerPage(response.data.slice(0,10));}
        )
    },[])
    const pageHandler= (pageNumber) => {
        setPerPage(data.slice((pageNumber*10)-10,pageNumber*10));
    }
  return (
    <div>
        <center>
            {data.length>=1?
            <div>
                {perPage.map(post=> 
                <div className='card'>
                    <div className='card-body'>{post.title}</div>
                    
                </div>
                    )}<br/>
                    <PageNubers data={data} pageHandler={pageHandler}/>
            </div>:<p>Data not loaded</p>}<br/>
            <Link to="/"><button className='btn btn-primary'>Home</button></Link>
        </center>
    </div>
  )
}

export default Pagination
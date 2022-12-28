import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


import './Photoshoot.css'
const PhotoShoot = () => {
    const[imgName,setImgName]=useState('');
    const[value,setValue]=useState([]);
    const changeHandler = e => {
        setImgName(e.target.value);
    }
    // let navigate=useNavigate();
    // const handleClick = () => {
    //    imgName && navigate(`/search/${imgName}`);
    // }
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=32119522-93640dc657c90af9064d7a097&q=${imgName}&image_type=photo`).then(
            response=>setValue(response.data.hits)
        )
        console.log(value);
    },[imgName])
    const submitHandler = e => {
        e.preventDefault();

    }
    
    
  return (
    <div>
        <div className="navbar">
            <h2>Pixabay</h2>
            <Link to="/"><button style={{"border":"solid"}}className='btn btn-primary'>Home</button></Link>
        </div>
        <div className='bgimg'>
            <h2 className='h2'>Stunning free images & royalty free stock</h2><br/>
            <input type="text" size="80" className="search" value={imgName} onChange={changeHandler} placeholder='Seach for all images'/><br/><br/>
            <div className='button'><button className='btn btn-primary' onSubmit={submitHandler}>Search</button></div>
        </div><br/><br/>
        
            <div className='row'>
                {value.map(val=>
                    <div className='col-md-4'>
                        <div className='card' style={{"width":"20rem"}}>
                            <img src={val.largeImageURL} className="card-img-top"/>
                            <div className='card-body'>
                                <h4 className='card-title'>Tags : {val.tags}</h4>
                                <h5 className='card-text'>User : {val.user}</h5>
                            </div>
                        </div>
                    </div>)}
            </div>        
    </div>
  )
}

export default PhotoShoot
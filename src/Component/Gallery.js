import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import info from './flowers.json';
import axios from 'axios';

const Gallery = () => {
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
    const[data,setData]=useState([]);
    const [search,setSearch]=useState('');
    const changeHandler = e => {
        setSearch(e.target.value);
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1').then(response => {
            setData(response.data.photos.photo);
        })
        // console.log(search);
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <Link to="/gallery"><h4>Gallery Snapshots</h4></Link><br/><br/>
                <input type="text" name="search" value={search} onChange={changeHandler}/><br/><br/>
                <button className="btn btn-primary">Submit</button>&nbsp;
                <Link to="/"><button className="btn btn-primary">Home</button></Link>
                <br/><br/>
                {
                    info.filter(flowers => flowers.name.toLowerCase().includes(search.toLowerCase())).map(flowers => {
                        return <div>
                            <img src={flowers.image} height="100px" width="150px"/>
                            {/* {data.name} */}
                        </div>
                    })
                }
            </form>
        </center>
    </div>
  )
}

export default Gallery
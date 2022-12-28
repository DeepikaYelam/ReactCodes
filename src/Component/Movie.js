import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Movie = () => {
    const[search,setSearch]=useState('');
    const API_KEY="263d22d8";
    const[value,setValue]=useState([]);
    const submitHandler= e => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`).then(
            response=>response.json()
        ).then(data=>setValue(data.Search))
        // console.log(search);
       
    }
    const download = url => {
        fetch(url).then(response => {
            response.arrayBuffer().then(function(buffer) {
                const url=window.URL.createObjectURL(new Blob([buffer]));
                const link=document.createElement("a");
                link.href=url;
                link.setAttribute("download", "image.png");
                document.body.appendChild(link);
                link.click();
            });
        }).catch(err => {
            console.log(err);
        });
    };
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h3 className="h3" style={{color:"blue"}}>Search your favorite movie</h3><br/><br/>
                <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} /><br/><br/>
                <button className='btn btn-primary'>Search</button>&emsp;&emsp;
                <Link to="/"><button className="btn btn-primary">Home</button></Link><br/>

                <div className='row'>
                    {value.map(movie=>
                        <div className='col-md-4'>
                            <div className="card" style={{"width": "18rem"}}>
                                <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
                                <div className="card-body">
                                    <h4 className="card-title">{movie.Title}</h4>
                                    <a href={movie.Poster} className='btn btn-primary' onClick={()=>download(movie.Poster)}>Download Poster</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </center>
    </div>
  )
}

export default Movie
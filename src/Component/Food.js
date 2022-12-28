import React, {useState} from 'react'
import Products from './Products';
import { Link } from 'react-router-dom';

const Food = () => {
    const APP_ID="5a5cad73";
    const APP_KEY="90ff8adfa800fa105e59b3e00d59a16f";
    const[data,setData]=useState([]);
    const[search,setSearch]=useState('');
    const changeHandler = (e) => {
        setSearch(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(search);
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            response => response.json()
        ).then(
            data => setData(data.hits)
        )
    }
  return (
    <div>
        <center>
            
                <form onSubmit={submitHandler}>
                    <h4>Food Recipe App</h4><br/><br/>
                    <input type="text"  value={search} onChange={changeHandler}/><br/><br/>
                    <button className="btn btn-success">Submit</button>&emsp;&emsp;
                    <Link to="/"><button className="btn btn-success">Home</button></Link>
                    <br/><br/>

                </form>
                {data.length>=1 ? <Products data={data}/>:null}
            
            
        </center>
    </div>
  )
}

export default Food
import React,{useState} from 'react'

const Nutrition = () => {
    const APP_ID="485ab134";
    const APP_KEY="0514b959fcfb865a1e615d636e41955c";
    const [data,setData]=useState([]);
    const[search,setSearch]=useState('');
    const changeHandler = e => {
        setSearch(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&ingr=${search}`).then(
            response => response.json()
        ).then(
           data => console.log(data)
        )
        
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h4>Nutrition Wizard</h4><br/><br/>
                <input type="text" name="search" value={search} onChange={changeHandler}/><br/><br/>
                <button className="btn btn-primary">Search</button><br/><br/>
            </form>
        </center>
    </div>
  )
}

export default Nutrition
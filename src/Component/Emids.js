import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import EmpData from './EmpData'

const Emids = () => {
    const[search,setSearch]=useState('');
    const[list,setList]=useState([]);
    const changeHandler = e => {
        setSearch(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        fetch("http://localhost:8094/emids/all").then(
            response=>response.json()
        ).then(data=>setList(data));
        console.log(list)
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h2>Emids Employees List</h2><br/>
                <input type="text" name="search" value={search} onChange={changeHandler}/>&emsp;
                <button className="btn btn-primary">Submit</button><br/>
            
                <br/><div className='row'>
                    {list.filter(val=>{
                        if(search==""){
                            return null;
                        }
                        if((val.empName.toLowerCase().includes(search.toLowerCase()))||
                        (val.empRole.toLowerCase().includes(search.toLowerCase()))||
                        (val.company.toLowerCase().includes(search.toLowerCase()))||
                        (val.location.toLowerCase().includes(search.toLowerCase()))){
                            return val;
                        }
                    }).map(val=>
               
                    <div className='col-md-4'>
                        <div className="card" style={{"width": "18rem"}}>
                            <img src={val.imgUrl} class="card-img-top" alt={val.empName}/>
                            <div className="card-body">
                                <h5 className="card-title">Employee Name : {val.empName}</h5>
                                <h5 className="card-text">Role : {val.empRole}</h5>
                                <h5 className='card-text'>Location : {val.location}</h5>
                                <Link to="/"><button className='btn btn-primary'>Home</button></Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </form>
        </center>
    </div>
  )
}

export default Emids
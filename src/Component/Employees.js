import axios from 'axios';
import React,{useEffect, useState} from 'react'
import EmpInfo from './EmpInfo';

const Employees = () => {
  const[search,setSearch]=useState('');
  const[info,setInfo]=useState([]);
  const changeHandler = e => {
    setSearch(e.target.value);
  }
  const allEmps = () => {
    fetch('http://localhost:8094/emids/all').then(
      respone=>{
        setInfo(respone.data);
      })}
      useEffect(()=>{
        allEmps();
      },[])
  const submitHandler = e => {
    e.preventDefault();
    }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h2>Emids Employees</h2><br/><br/>
          <input type="text" name="search" value={search} onChange={changeHandler} /><br/><br/>
          <button className='btn btn-primary'>Submit</button>
        </form>
        <div className='row'>
          {
            info.map((val,key) =>
              <div className="card" style="width: 18rem;">
                <img src={val.imgUrl} class="card-img-top" alt={val.empName}/>
                <div className="card-body">
                  <h5 className="card-title">{val.empName}</h5>
                  <p className="card-text">{val.empRole}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>)
          }
        </div>

        {/* {info.length>=1 ? <EmpInfo info={info}/>:null} */}
      </center>
    </div>
  )
}

export default Employees
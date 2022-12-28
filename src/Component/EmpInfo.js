import React from 'react'

const EmpInfo = ({info}) => {
  return (
    <div>
        Emids
        <div className='row'>
            {info.map(info=>{
                <div class="card" style="width: 18rem;">
                    <img src={info.imgUrl} class="card-img-top" alt={info.company}/>
                    <div class="card-body">
                    <h5 class="card-title">{info.empName}</h5>
                    <p class="card-text">{info.empRole}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default EmpInfo
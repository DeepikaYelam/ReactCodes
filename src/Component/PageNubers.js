import React from 'react'

const PageNubers = ({data,pageHandler}) => {
    let nums=[];
    for(let i=1;i<Math.ceil(data.length/10)+1;i++){
        nums.push(i);
    }
  return (
    <div>
        <center>
            {nums.map(pages=><button onClick={() => pageHandler(pages)} className='btn btn-primary'> {pages} </button>)}
        </center>
    </div>
  )
}

export default PageNubers
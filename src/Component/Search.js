import axios from 'axios'
import React, { useEffect } from 'react'

const Search = ({match}) => {
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=32119522-93640dc657c90af9064d7a097&q=${match.params.imgName}&image_type=photo`).then(
            res=>console.log(res.data.hits)
        )
    },[])
  return (
    <div>
        {match.params.imgName}
    </div>
  )
}

export default Search
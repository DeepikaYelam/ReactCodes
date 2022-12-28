import React, {useEffect} from 'react'

const Covid = () => {
     useEffect( () => {
        fetch('https://data.covid19india.org/v4/min/data.min.json').then(
            response => response.json()
        ).then(jsondata=>console.log(jsondata))
     },[])
  return (
    <div>
        <center>
            <h3>INDIA COVID-19 DASHBOARD</h3>
        </center>
    </div>
  )
}

export default Covid
import React from 'react'
import { Link } from 'react-router-dom'
// import {unstable_HistoryRouter } from 'react-router-dom'

const Home = () => {
  // let word=unstable_HistoryRouter();
  return (
    <div>
        <center>
            <Link to="/"><h2>This is home page</h2></Link><br/>
            <Link to="/dashboard"><button className="btn btn-success">Dashboard</button></Link>&emsp;&emsp;
            <Link to="/about"><button className="btn btn-success">About</button></Link>&emsp;&emsp;
            <Link to="/cal"><button className="btn btn-success">Calculator</button></Link>&emsp;&emsp;
            <Link to="/gallery"><button className="btn btn-success">Gallery</button></Link>&emsp;&emsp;
            <Link to="/form"><button className="btn btn-success">Form</button></Link>&emsp;&emsp;
            <Link to="/click"><button className="btn btn-success">Check</button></Link>&emsp;&emsp;
            <Link to="/food"><button className="btn btn-success">Food</button></Link>&emsp;&emsp;
            <Link to="/nutrition"><button className="btn btn-success">Nutrition</button></Link>&emsp;&emsp;
            <Link to="/covid"><button className="btn btn-success">Covid</button></Link>&emsp;&emsp;
            <Link to="/movie"><button className="btn btn-success">Movie</button></Link>&emsp;&emsp;
            <Link to="/emoji"><button className="btn btn-success">Emoji</button></Link>&emsp;&emsp;<br/><br/>
            <Link to="/class"><button className='btn btn-success'>ClassComponent</button></Link>&emsp;&emsp;
            <Link to="/emids"><button className='btn btn-success'>Employees</button></Link>&emsp;&emsp;
            <Link to="/todo"><button className='btn btn-success'>TodoMgmt</button></Link>&emsp;&emsp;
            <Link to="/page"><button className='btn btn-success'>Pagination</button></Link>&emsp;&emsp;
            <Link to="/photo"><button className='btn btn-success'>Pixabay</button></Link>&emsp;&emsp;
            <Link to="/material"><button className='btn btn-success'>Material</button></Link>&emsp;&emsp;
            <Link to="/render"><button className='btn btn-success'>HOC</button></Link>
            {/* <Link to="/link"><button className='btn btn-primary'>Link</button></Link> */}
            {/* <Link to="/auth"><button className="btn btn-success">Authentication</button></Link> */}
            {/* <button onClick={() => word.push("/dashboard") }>Refresh</button> */}

        </center>
    </div>
  )
}

export default Home
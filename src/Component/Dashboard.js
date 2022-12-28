import React from 'react'
import { Link } from 'react-router-dom'
import image from './img.jpg'
import audio from './Teri Mitti.mp3'
import video from './Motivation.mp4'
const Dashboard = () => {
  return (
    <div>
        <center>
            <Link to="/dashboard"><h2>This is dashboard page!!!</h2></Link><br/>
            <img src={image} height='400px' width='550px'/><br/><br/>
            <a href={image} download="audio"><button className="btn btn-primary">Click here to download</button></a><br/><br/>
            <audio controls>
              <source src={audio} type="audio/ogg"/>
            </audio><br/><br/>
            <video width="500px" height="250px" controls>
              <source src={video} type="video/mp4"></source>
            </video><br/><br/>
            <Link to="/"><button className="btn btn-success">Home</button></Link>&emsp;&emsp;

            <Link to="/about"><button className="btn btn-success">About</button></Link>&emsp;&emsp;

            <Link to="/cal"><button className="btn btn-success">Calculator</button></Link>

        </center>
    </div>
  )
}

export default Dashboard
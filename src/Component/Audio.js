import React from 'react'
import audio from './Teri Mitti.mp3'

const Audio = () => {
  return (
    <div>
        <center>
            <audio controls>
                <source src={audio} type="audio/ogg"/>
            </audio>
        </center>
    </div>
  )
}

export default Audio
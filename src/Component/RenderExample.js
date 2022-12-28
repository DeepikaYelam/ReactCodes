import React from 'react'
import HOC from './HOC';

const RenderExample = (props) => {
    return(
        <div>
        <h1>Try to be creative, constructive and innovative {props.name}</h1>
        
        </div>
    )
}
export default HOC(RenderExample);
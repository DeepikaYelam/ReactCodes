import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Calculator = () => {
    const[input,setInput]=useState("");
    const[result,setResult]=useState(0);
    const changeHandler = e => {
        setInput(e.target.value);
    }
  return (
    <div>
        <center>
            <br/><br/><Link to="/cal"><input type="text" name="input" value={input} onChange={changeHandler}/></Link><br/><br/>
            <button className="btn btn-primary" onClick={()=> setResult(eval(input))}>Result</button><br/>
            <h4>Result is: {result}</h4>

            <button className="btn btn-primary" onClick={() => setInput(input+'1')}>1</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'2')}>2</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'3')}>3</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'4')}>4</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'5')}>5</button><br/>

            <button className="btn btn-primary" onClick={() => setInput(input+'6')}>6</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'7')}>7</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'8')}>8</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'9')}>9</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'0')}>0</button><br/>

            <button className="btn btn-primary" onClick={() => setInput(input+'+')}>+</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'-')}>-</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'*')}>*</button>
            <button className="btn btn-primary" onClick={() => setInput(input+'/')}>/</button>
            <button className="btn btn-primary" onClick={() => setInput('')}>Clr</button><br/><br/>
            <Link to="/"><button className="btn btn-primary">Home</button></Link>


        </center>
    </div>
  )
}

export default Calculator

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClassComponentEx extends Component {
    state={
        "name":"Deepika",
        songs:[],
        "search":""
    }
    changeHandler= e => {
        this.setState(e.target.value);

    }
    componentDidMount(){
        fetch('http://localhost:8086/song/songs').then(
            response=>response.json()
        ).then(data=>this.setState({songs:data})).catch(err=>console.log(err))
    }
  render() {
    return (
      <div>
        <div>
            <center>
                <h2>Welcome to the class component: {this.state.name}</h2><br/><br/>
                <button className='btn btn-primary' onClick={()=>this.setState({name:"Good Evening"})}>Submit</button><br/>
                <input type="text" name="search" value={this.state.search} onClick={this.changeHandler}/>
            </center>
        </div><br/>
        <div className='row'>
            {this.state.songs.map((card=>
                <div className='col-md-4'>
                    <div  key={card.id} className="card" style={{"width": "18rem"}}>
                        <img src={card.imgUrl} class="card-img-top" alt={card.title}/>
                        <div class="card-body">
                            <h5 class="card-title">{card.title}</h5>
                            <audio controls>
                                <source src={card.audio} type="audio/ogg"></source>
                            </audio>
                            <Link to="/"><button className='btn btn-primary'>Home</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    )
  }
}

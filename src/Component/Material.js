import { AppBar, ImageList, ImageListItem, TextField, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import images from './ImagesData.json'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Material = () => {
 const[data,setData]=useState({
  name:"",
  mail:"",
  proposal:"",
  address:""
 })
  const{name,mail,proposal,address}=data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <AppBar>
        <Toolbar>
          <PhotoCameraIcon/>
          <Typography variant="h5">Photography</Typography>
          <Link to="/"><HomeIcon/></Link>

        </Toolbar>
      </AppBar>
      <Container style={{"marginTop":"70px","textAlign":"center"}}>
        <Typography variant="h4">Our Latest Version Of Photography</Typography><br/>
        <Typography paragraph>Pleasure to take your photos as well, Please fill the below form for any requests</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={170} cols={3}>
          {images.map(content =>
            <ImageListItem key={content.id} cols={1}>
            <img src={content.img} alt={content.title}/>
          </ImageListItem>
            )}
        </ImageList>
      </Container>
      <Container>
        <center>
          <form onSubmit={submitHandler}>

            <Typography variant="h4">Content Form</Typography>
            <TextField type="text" style={{"width":"500px", "margin":"5px"}}  value={name} label="Name" onChange={changeHandler} variant="outlined"/><br/>
            <TextField type="email" style={{"width":"500px", "margin":"5px"}} value={mail} label="Email" onChange={changeHandler} variant="outlined"/><br/>
            <TextField type="text" style={{"width":"500px", "margin":"5px"}} value={proposal} label="Proposal" onChange={changeHandler} variant="outlined"/><br/>
            <TextField type="text" style={{"width":"500px", "margin":"5px"}} value={address} label="Address" onChange={changeHandler} variant="outlined"/><br/>
            <Button variant='contained'>Submit</Button>
          </form>
        </center>
      </Container>
    </div>
  )
}

export default Material
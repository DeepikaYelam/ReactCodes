import React from 'react'
import './App.css'
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Component/Calculator';
import Gallery from './Component/Gallery';
import SampleForm from './Component/SampleForm';
import Onclickexample from './Component/Onclickexample';
import Food from './Component/Food';
import Nutrition from './Component/Nutrition';
import Covid from './Component/Covid';
import Movie from './Component/Movie';
import Emoji from './Component/Emoji';
import ClassComponentEx from './Component/ClassComponentEx';
import Emids from './Component/Emids';
import TodoMgmt from './Component/TodoMgmt';
import Pagination from './Component/Pagination';
import PhotoShoot from './Component/PhotoShoot';
import Search from './Component/Search';
import Material from './Component/Material';
import RenderExample from './Component/RenderExample';
// import Header from './Component/Header';
// import UserAuth from './Component/UserAuth';
const App = () => {
  
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/cal" element={<Calculator/>}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/form" element={<SampleForm/>}/>
        <Route path="/click" element={<Onclickexample/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/nutrition" element={<Nutrition/>}/>
        <Route path="/covid" element={<Covid/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/emoji" element={<Emoji/>}/>
        <Route path="/class" element={<ClassComponentEx/>}/>
        <Route path="/emids" element={<Emids/>}/>
        <Route path="/todo" element={<TodoMgmt/>}/>
        <Route path="/page" element={<Pagination/>}/>
        <Route path="/photo" element={<PhotoShoot/>}/>
        <Route path="/search/:imgName" element={<Search/>}/>
        <Route path="/material" element={<Material/>}/>
        <Route path="/render" element={<RenderExample/>}/>
        {/* <Route path="/link" element={<Header/>}/> */}
        {/* <Route path="/auth" element={<UserAuth/>}/> */}
      </Routes>
     </Router>
             
     
    </div>
  )
}

export default App





























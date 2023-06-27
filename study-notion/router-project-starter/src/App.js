import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./pages/Navbar";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {

  const[loggedIn,setLoggedIn]=useState(false)
  return (
  <>
  <Navbar  loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Signup" element={<Signup  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
    <Route path="/Login" element={<Login   loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
    <Route path="/Dashboard" element ={<Dashboard/>}/>  
  </Routes>
 


</>
  );
 
}

export default App;

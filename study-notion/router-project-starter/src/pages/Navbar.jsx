import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'


function Navbar({loggedIn,setLoggedIn}) {

    return (
    <div className='flex items-center justify-between m-2 '>
      <Link to="/Home"><img src={Logo} alt='logo'/></Link>
      <ul className='text-white flex gap-3'>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className='text-white flex gap-3 w-[300px]'>
        {
            loggedIn ?
            ( 
            <div className='flex gap-3'>
                <button onClick={()=> 
                {
                    toast.success("Logged Out")
                    setLoggedIn(false)}} > Log out</button> 
                   <Link to='/Dashboard'><button>DashBoard</button> </Link> 
            </div>
            )
                 :
            (
                <div className='flex gap-3'>
                    <Link to='/Login'><button>Log In</button> </Link>
                    <Link to="/Signup"><button>Sign up</button></Link>
                </div>
            )
        }
      
      
      </div>
      
    </div>
  )
}

export default Navbar

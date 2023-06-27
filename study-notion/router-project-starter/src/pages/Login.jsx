import React from 'react'
import frame from '../assets/frame.png'
import login from '../assets/login.png'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
function Login({loggedIn,setLoggedIn}) {
  
  const navigate = useNavigate();
   
  function clickLoggedIn(e)
  {  
      e.preventDefault()
      setLoggedIn(true)
      navigate("/Dashboard")
      toast.success("Logged in")
     
      
      
  }
  return (
    <div className='text-white justify-center gap-6 m-14 w-[1200px] mr-auto ml-auto flex sm:flex-col md:flex-row' >
      <div>
      <h1 className='text-3xl font-semibold mt-10 sm:w-[700px] md:w-[450px]  sm:text-center md:text-left'>Welcome Back </h1>
      <p className='mt-3 text-xl text-zinc-400 sm:w-[700px] md:w-[450px] sm:text-center md:text-left '>Build skills for today , tomorrow, and beyond.</p>
      <p className='italic text-xl text-cyan-600  sm:w-[700px] md:w-[450px] sm:text-center md:text-left' >Education to future-proof your career. </p>

      <form onSubmit={clickLoggedIn} className='sm:w-[700px] md:w-full m-1'>
        
        <label className='mt-4'>Email Address</label><br/>
          <input type='email' required placeholder= "Enter email address" className='mt-4 p-4 bg-zinc-800 h-[30px] w-full rounded-md' /> 
        <label className='mt-4'>Password <br/>
          <input type='password' required placeholder= "Enter password" className='mt-4 p-4 bg-zinc-800 h-[30px] w-full rounded-md'/><br/>
        </label>
        <button className='mt-6 bg-yellow-400 text-black h-[30px] w-full rounded-md'>
          Log In
        </button>
        </form> 
      </div>
      <div className='m-14 '>
        <img src={frame} className='relative w-[400px] left-[60px] ' />
        <img src={login} className='absolute w-[400px] sm:top-[500px] md:top-[130px]'/>
      </div>
      
      </div>
      
    
    
     
 
  )
}

export default Login

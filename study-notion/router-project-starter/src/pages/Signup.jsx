import React from 'react'
import frame from '../assets/frame.png'
import signup from '../assets/signup.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast'

function Signup() {

  const[showPassword,setshowPassword]=useState(false)
  const[showconfirmPassword,setshowconfirmPassword]=useState(false)
  
  const navigate= useNavigate()
  function submitHandler(e)
  {
    e.preventDefault()
    toast.success("Account Created")
    navigate("/Dashboard")
  }


  return (
    <div className='text-white justify-center gap-6 m-14 sm:w-[460px] md:w-[1200px] mr-auto ml-auto flex sm:flex-col md:flex-row'>
      <div>
      <h1 className='text-3xl font-semibold mt-10 w-[450px]'>Join the millions learning  to code with StudyNotion for free</h1>
      <p className='mt-3 text-xl text-zinc-400'>Build skills for today , tomorrow, and beyond.</p>
      <p className='italic text-xl text-cyan-600' >Education to future-proof your career. </p>
      <div className='border-2 flex gap-1 w-[300px] rounded-full bg-zinc-800 mt-3' >
        <button className='rounded-full w-[150px] border-2'>Student</button>
        <button className='rounded-full w-[150px] border-2'>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div className='flex gap-10 mt-1 '>
          <label className='mt-2 '>First Name <br/>
             <input type='text' required placeholder= "Enter first name" className='mt-2 p-4 bg-zinc-800 h-[30px] rounded-md'/><br/>
          </label>
          <label className='mt-2 '>Last Name<br/>
            <input type='text' required placeholder= "Enter first name" className='mt-2 p-4 bg-zinc-800 h-[30px] rounded-md'/>
          </label>
        </div>
        <label className='mt-2 '>Email Address</label><br/>
        <input type='email' required  placeholder= "Enter email address" className='mt-2 p-4 bg-zinc-800 h-[30px] w-full rounded-md' />
        
        <div className='flex gap-10 mt-1 '>
          <label className='mt-2 '>Create Password <br/>
             <input type={showPassword ? ('text') : ('password')}
               required placeholder= "Enter password" className='mt-2 p-4 bg-zinc-800 h-[30px] rounded-md'
           /><br/>
           <span onClick= {()=> setshowPassword((prev)=> !prev)}> { showPassword ? (<AiOutlineEye className='absolute ml-[180px] mt-[-25px] text-xl'/>):(<AiOutlineEyeInvisible className='absolute ml-[180px] mt-[-25px] text-xl'/>) }</span>
          </label>
        <label className='mt-2 '>Confirm Password<br/>
        <input type={showconfirmPassword ? ('text') : ('password') }required placeholder= "Confirm password" className='mt-2 p-4 bg-zinc-800 h-[30px] rounded-md'/>
        <span onClick= {()=> setshowconfirmPassword((prev)=> !prev)}> { showconfirmPassword ? (<AiOutlineEye className='absolute ml-[180px] mt-[-25px] text-xl'/>):(<AiOutlineEyeInvisible className='absolute ml-[180px] mt-[-25px] text-xl'/>) }  </span>
        </label>

        </div>
        <button className='mt-6 bg-yellow-400 text-black h-[30px] w-full rounded-md'>Create Account</button>
        </form> 
      </div>
    
      <div className='m-14'>
      <img src={frame} className='relative w-[400px] sm:left-[50px] md:left-[70px]' />
      <img src={signup} className='absolute sm:w-[350px] md:w-[400px] sm:top-[720px]  md:top-[130px]'/>
      </div>
      
      
    </div>
  )
}

export default Signup

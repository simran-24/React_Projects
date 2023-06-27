import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'

function Navbar({size}) {

  return (
  <div div className="bg-black text-white w-screen">
  <div className='flex flex-row items-center justify-between mx-10 py-3 '>
    <NavLink to="/" className='font-medium text-xl tracking-wider'>Home</NavLink>
    <NavLink to="/Cart" className='flex flex-row items-center'>
      <BsCart4 className='font-extrabold text-5xl' />
      <sup>
      <span className='text-red-500 font-extrabold text-xl '>{size}</span>
      </sup>
    </NavLink>

  </div>
  </div>
  
   
  )

    
  
}

export default Navbar

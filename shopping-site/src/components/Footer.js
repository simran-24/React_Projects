import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {RxGithubLogo} from 'react-icons/rx'
import {SiGmail} from 'react-icons/si'
function Footer() {
  return (
    <div className='bg-black text-white flex justify-between p-10 text-xl' >
        <h1>Made By Simran ❤️</h1>
        <div>
           <h1>
           Contact at  
           </h1>
           <div className='flex justify-around mt-1'>
           <a href='https://www.linkedin.com/in/simran-8b7310249/' target='_blank' >
            <AiFillLinkedin className='text-2xl'/>
           </a>
           <a href='https://simrank2409@gmail.com' target='_blank' >
            <SiGmail className='mt-1'/>
           </a>
           </div>
        </div>
        <div>
           <h1>Source Code</h1> 
           <a href=''>
            <RxGithubLogo className='text-2xl mt-1 mr-auto ml-auto'/>
            </a> 
        </div>
      
    </div>
  )
}

export default Footer

import React from 'react'
import { useState } from 'react';
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import { toast } from 'react-toastify';
function Card(props) {

  const Course=props.data;
  
  const[like,setLike] = useState(false)
  function likeHandler()
  {
      if(like)
      {
        setLike(false)
        toast.warning("remove from Liked")
         
      }
      else
      {
        setLike(true)
        toast.success("Liked the item")
      }
      
  }

  return (
      <div className='bg-black m-3 w-[400px] text-white '>
          <img src={Course.image.url} alt={Course.image.alt} className='w-fit'/>
          <button className='absolute' onClick={likeHandler}>
           {
              like? (<FcLike className='w-[40px] h-[40px]  relative left-[350px] bottom-[20px] '></FcLike>)
                        :
              (<FcLikePlaceholder className='w-[40px] h-[40px]  relative left-[350px] bottom-[20px] ' />)
           } 
            </button>
          <h1 className='text-xl font-bold px-2 '>{Course.title}</h1>
          <p className=' px-2 py-5 pt-2'>
            {
                Course.description.length>150 ? ( Course.description.substr(0,100)) + "....": (Course.description)
            }</p>
      </div>
     
  
  )
}

export default Card

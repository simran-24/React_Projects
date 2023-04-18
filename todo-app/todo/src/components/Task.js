import React from 'react'
import { useState } from 'react'
// import List from './List'
function Task() {

const[todoList,settodoList]=useState({task : "" , desc : ""})
let AllData=[]
function changeHandler(event)
{
    settodoList( prevData=> 
        {
        return {...prevData , 
                [event.target.name]:event.target.value,
                
               }
      
        })
    
       

}
function submitHandler(event)
{
    event.preventDefault()
    AllData.push(todoList)
        console.log(AllData) 
    
}

  return (
    <div className='border-4 border-red-300 w-[50%] mx-auto h-[400px] p-10'>
      <form onSubmit={submitHandler} > 
        <div className='flex justify-around items-baseline '>
            <label className='text-white font-semibold'> Task Name </label>
            <input 
                type='text'
                className='w-[300px] h-[30px]'
                name="task"
                onChange={changeHandler}/>
        </div>
        <div className='flex justify-around items-baseline'>
        <label className='text-white font-semibold'>Description</label>
        <input 
         type="text"
         name="desc"
         placeholder='Enter Description of the Task'
         className='mt-8 w-[300px] h-[60px] p-2'
         onChange={changeHandler}></input>
        </div>
        <button className='w-[30%] h-[40px] bg-white rounded-md font-bold text-xl mt-[20px]'>Add</button>
      </form>
    </div>
  )
}

export default Task

import React from 'react'
import { filterData } from './Data'
function Navbar(props) {
    const data=filterData;
    const category=props.category
    const setCategory=props.setCategory

    function filterHandler(title)
    { 
      setCategory(title)
    }
  return (
    <div className='flex flex-col sm:ml-auto sm:mr-auto md:justify-center w-44 h-60  md:flex-row  md:w-[1000px] lg:w-[1400px] md:h-32 border-black' >
       {data.map((data)=> {
       return <button key= {data.id} 
       className='bg-sky-500/40 m-2 h-10 sm:1/12 md:w-[150px] sm:bg-sky-500/40 md:bg-sky-500/40 rounded-md text-xl font-medium '
       onClick={()=>{filterHandler(data.title)}}
       >{data.title}</button>} )}
    </div>
  )
}

export default Navbar

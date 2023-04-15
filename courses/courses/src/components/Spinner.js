import React from 'react'
function Spinner() {
  return (
      <div>
      <p className='w-[48px] h-[48px] border-[5px] border-dotted border-black relative box-border animate-spin rounded-full mx-auto mt-20'></p>
      <p className='text-center mt-10 text-3xl font-bold tracking-[0.5rem]'>Loading......</p>
      </div>
   
    
  )
}

export default Spinner

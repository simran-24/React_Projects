import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

function Home({appdata,setappData,addItem,size,isPresent,setisPresent}) {
  return (
    <div className='overflow-hidden'>
        <Navbar size={size}/>
        <div className='flex flex-rows '>
        <Products appdata={appdata} setappData={setappData} addItem={addItem} isPresent={isPresent} setisPresent={setisPresent}/>
        
        </div>
        <Footer/>
    </div>
  )
}

export default Home

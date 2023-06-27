import React from 'react'
import Product from './Product'

function Products({appdata,addItem,isPresent,setisPresent}) {
    return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ml-auto mr-auto'>
      {
        appdata.map((item)=>
        {
          return <Product key ={item.id }item={item} addItem={addItem} isPresent={isPresent} setisPresent={setisPresent}/>

        })
      }
    </div>
  )
}

export default Products

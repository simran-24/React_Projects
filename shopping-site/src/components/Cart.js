import React, { useEffect, useState } from 'react'
import Cartitem from './Cartitem'
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar';

function Cart({cart,setCart,qty,setqty}) {
    const navigate = useNavigate();
    const[totalItem,setTotalItem]=useState(1)
    const[price,setPrice]=useState(0)
    function priceHandler()
    {
      let totalprice=0
      setTotalItem(qty)
      if(cart.length<=0)
      {
        setPrice(0)
      }
      cart.map((item)=>
      {
        totalprice+= item.price*qty 
        setPrice(totalprice) 

      })
     
    }

    useEffect(()=>{
      priceHandler()
    })

  return (
    
    <div>
      <Navbar/>
      {
        cart.length>0?
        (cart.map((item)=> 
        {
          
          return <Cartitem item={item} cart={cart} setCart={setCart} className="mr-[10px]" />
        }
        )
        )
        :
        (
          <div className='flex items-center flex-col mt-[200px]'>
             <h3 className='text-2xl font-bold mb-[30px]'>No items Added</h3>
             <button onClick={()=>navigate("/")} className='bg-gradient-to-r from-indigo-600  w-[200px] text-xl font-medium text-black p-3  hover:scale-90 hover:drop-shadow-2xl'> Shop Now</button>
          </div>
        )
      
      }
      {
      cart.length>0?
        (  <div> <h1 className='text-3xl font-bold pb-3 pl-[80px] absolute mb-[-100px] w-[800px] ml-[50px]'>Total item price: </h1>
        <span className='text-3xl font-bold pb-3 pl-[300px] ml-[400px]'>${price}</span>
      </div>)
      :
      (<></>)
      }
    
    </div>
    
  )
}

export default Cart



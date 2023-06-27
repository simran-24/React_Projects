import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
function Cartitem({item,cart,setCart}) {



    const id=item.id
    const removeItem=((id)=>  
    {  
        const newList=cart.filter((product)=> product.id!==id)
        setCart(newList)
    }     
    )




return (
  <div>
  
    <div className=' border-2 h-[350px] ml-[100px] my-24 p-4 md:w-[750px]'>
      <h3 className='text-xl font-bold pb-3 pl-[300px]'>{item.title}</h3>
      <p  className='text-sm font-medium text-slate-400 pl-[300px] mt-[30px]'>{item.description}</p>
      <img src={item.image} className='h-[250px] w-[200px] absolute ml-[60px] mt-[-150px]'></img>
      <p className='text-xl mt-[50px]  pl-[300px]'> <span className='text-xl font-medium '>Price : $</span>{item.price}</p>
      <button className='' onClick={()=>removeItem(id)}  ><RiDeleteBin5Line className='font-extrabold text-red-600 text-4xl absolute ml-[680px] mt-[-55px]'/></button>
    </div>
  </div>

  )
}

export default Cartitem

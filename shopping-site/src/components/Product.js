import React from 'react'


function Product({item,addItem})
 {
  const description=item.description

  return (
  <div className='border-8 rounded-lg mx-10 my-10 pt-[40px] pl-4 sm:h-[900px] md:w-[400px] md:h-[450px]' >
      <h3 className='text-xl font-bold pb-3 md:text-sm md:pb-1 '>{item.title}</h3>
      <p className='text-lg font-medium text-slate-400 w-[550px] md:w-[350px] md:text-sm'>
        {
          description.length>100?
          (
              <div>
                {description.substr(0,99)+ "...."}
                
              </div>
              
          ):
          (
            <div>
                {description}
            </div>
          
          )
          
          
        }</p>
      <img src={item.image} className='h-[550px] w-[400px] mr-auto ml-auto pt-[80px] md:w-[150px] md:h-[200px] md:text-sm md:pt-[20px]'></img>
      <p className='text-xl '> <span className='text-xl font-medium md:text-sm'>Price : $</span>{item.price}</p>
      <button onClick={()=>{addItem(item)}} className='border-0 w-[150px] bg-blue-600 text-xl font-medium text-white p-2 mt-[40px] mt-2 rounded-lg hover:bg-blue-500 md:text-sm md:mt-[20px] hover:transition-shadow'>Add to Cart</button>
              
    </div>
   

   
  )
}

export default Product

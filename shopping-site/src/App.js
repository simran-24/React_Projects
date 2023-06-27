import { useEffect, useState } from 'react';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import { toast } from 'react-hot-toast';


function App() {
  const[appdata,setappData]=useState([])
  const[cart,setCart]=useState([])
  const[qty,setqty]=useState(1)


  useEffect(()=>
  {
      async function fetchData()
      {
        const response= await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        console.log(data)
        setappData(data)
      } 
      fetchData();
  },[]
  )
 
    const addItem= ((item)=> 
    {
      cart.forEach((product)=>
      {
        if(item.id===product.id)
        {
          toast("Iteam already in Cart",{icon:"🛒"})
        }
      })
      setCart([...cart,item])
      toast.success("Added to cart")
    })
  return (

    <div>
     <Routes>
      <Route path="/" element={<Home setappData={setappData} appdata={appdata} addItem={addItem} size={cart.length}/>}/>
      <Route path="/Cart" element={<Cart setappData={setappData} appdata={appdata} addItem={addItem} cart={cart} setCart={setCart}
      qty={qty} setqty={setqty}
      
      />}/>

    </Routes>



    </div>

    



 
  );
}

export default App;

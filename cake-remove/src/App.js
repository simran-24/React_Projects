import Block from './components/Block.js';
import { useState } from 'react';
import { imgdata } from './components/Data';
function App() {
 
const [data,setData]=useState(imgdata)
console.log(data);
const removeData= (id)=> 
{ 
    const newData= data.filter((data)=> data.id!==id)
    setData(newData)
}

if(data.length===0)
{
    return (
        <div className='flex flex-col justify-center  items-center border-2 h-screen bg-zinc-600'>
            <h3 className='text-white text-4xl sm:text-3xl' >Empty data</h3>
            <p className='text-xl font-bold pt-10 text-stone-400'>You don't have any data to display. Click on Refresh to display</p>
            <button onClick={()=> {setData(imgdata)}} className="w-20 h-10 mr-5 mt-2 rounded-lg bg-gradient-to-br from-indigo-500 via purple-500 to-pink-600 text-white text-lg mt-10 ">Refresh</button>
        </div>
    )
}

  return (
    <div className="App">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500  text-white tracking-wider text-center flex items-center p-10 ">
          <img src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-20 w-20 rounded-full' alt=""></img>
          <h1 className='font-extrabold text-2xl sm:text-2xl md:text-3xl lg-4xl sm:ml-10 md:ml-56 lg:ml-96' >Have a Cake with Simran </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 pl-10 pr-10 gap-32">
        {
            data.map((obj)=> (<Block  src={obj.src} title={obj.title} price={obj.price}  alt={obj.alt} removeData={removeData} id={obj.id}/>))
        }
      </div>
    </div>  
  );
}

export default App;




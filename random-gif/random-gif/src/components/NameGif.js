import React ,{useEffect, useState}from 'react'
import axios from 'axios';

const API_Key= 'Y6IIIFS99qjFx1hy2pYuP7Lan2UFGPk7'
function NameGif() {
  const[gif,setGif]=useState("")
  const[value,setValue] = useState("random")
    async function fetchApi()
    { 
        const fetchapi= `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&tag=${value}`;
        const {data}= await axios.get(fetchapi)
        console.log(data)
        const image_url= data.data.images.downsized.url
        console.log(image_url)
        setGif(image_url)
        
    }
    useEffect(() => {
        fetchApi()
    },[]
    )
    function changeHandler(e)
    {
      const value = e.target.value
      setValue(value)
    }
    function clickHandler()
    {
      fetchApi()
    }

  
  return (
    <div className='text-white w-[600px] '>
      <h1 className='text-2xl'>Random {value} Gif</h1>
      <img src={gif} className='w-[600px] h-[400px] ml-auto mr-auto mt-10'/>
      <input type='text' className='bg-white mt-5 text-black' onChange={changeHandler}  /><br/>
      <button className='border-2 rounded-md p-2 w-[100px] mt-3' onClick={clickHandler}>Generate</button>
    </div>
    
  )
}

export default NameGif

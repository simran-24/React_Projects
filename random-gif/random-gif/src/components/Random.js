import React ,{useEffect, useState}from 'react'
import axios from 'axios';


const API_Key= 'Y6IIIFS99qjFx1hy2pYuP7Lan2UFGPk7'
function Random() 
{
    const[gif,setGif]=useState("")
    async function fetchApi()
    { 
        const fetchapi= `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
        const {data}= await axios.get(fetchapi)
        const image_url= data.data.images.downsized.url
        console.log(image_url)
        setGif(image_url)
        
    }
    useEffect(() => {
        fetchApi()
    },[]
    )
    function clickHandler()
    {
          fetchApi()
    }
  return (
    < div className='text-white w-[600px] min-h-[400px]' >
      <h1 className='text-2xl'>Random Gif</h1>
      <img src={gif} className='w-[600px] h-[400px] ml-auto mr-auto mt-10'/>
      <button className='border-2 rounded-md p-2 w-[100px] mt-5' onClick={clickHandler}>Generate</button>
    </div>
  )
  }

export default Random

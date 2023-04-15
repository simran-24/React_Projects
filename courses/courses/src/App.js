import React from "react";
import Navbar from "./components/Navbar"
import Heading from "./components/Heading"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner";
import { apiUrl,filterData } from "./components/Data";
import { useEffect, useState } from "react";
import {toast} from "react-toastify";
// import App from './App.css'
function App() {
  

  const[courses,setCourses]=useState(null)
  const[loading,setLoading]=useState(true)
  const[category,setCategory]=useState(filterData[0].title)
    async function fetchData()
    {
      setLoading(true)
      try
      {
        const APIData= await fetch(apiUrl);
        const output=await APIData.json()
        setCourses(output.data)
      }
      catch(error)
      {
        toast.error("Something went wrong")
      }
      setLoading(false)
    }

  useEffect(()=> {
    fetchData()
  },[])

  return (
    <div className="App overflow-x-hidden">
       <Heading/>
       <Navbar category={category} setCategory={setCategory}/>
       <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} setCategory={setCategory}/>)
        }
       </div>
    </div>
  );
}

export default App;

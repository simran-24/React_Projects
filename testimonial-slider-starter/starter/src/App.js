import React from "react";
import Heading from "./components/Heading";
import Testimonials from "./components/Testimonials";
import reviews from './data'

const App = () => {
  return(
   <div className='h-[100vh] flex flex-col justify-center w-[100vw]'>
      <Heading/>
      <Testimonials reviews={reviews}/>
    </div>)
};

export default App;

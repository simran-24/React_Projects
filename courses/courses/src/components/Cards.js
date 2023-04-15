import React from 'react'
import Card from './Card'

function Cards(props) {
  const CourseData=props.courses;
  const category=props.category;
  // const setCategory=props.setCategory;
  

  function getAllCourse( )
  {
    if(category=="All")
    {
      let CompleteAPIData = [] ;
      Object.values(CourseData).forEach(
        element => element.forEach(
          (data)=>
           { CompleteAPIData.push(data)}))
      return CompleteAPIData;
    }
    else
    {
        return CourseData[category]
    }
  }
  return (
    <div  className='grid gap-7 sm:w-[500px] lg:grid-cols-3 md:w-[1000px] lg:w-[1400px] ml-auto mr-auto pl-auto pr-auto sm:grid-cols-1 md:grid-cols-2 ' >
      {
        getAllCourse().map(
          (data)=> { return <Card key={data.id} data={data}/>
        })
          
        }
      
    </div>
  )
}

export default Cards

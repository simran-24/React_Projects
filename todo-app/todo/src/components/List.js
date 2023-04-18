import React from 'react'

function List(props) {
    const task=props.task
    console.log(task)
  return (
    <div className='text-white'>
      <h1 >{task}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default List

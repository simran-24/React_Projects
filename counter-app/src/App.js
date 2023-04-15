import {useState} from 'react';
import './index.css';

function App() {
// let count=0;
const[initial,setCount]=useState(0)
function incrementHandler()
{
  setCount(initial+1);
  // console.log(count)
 
}
function decrementHandler()
{
  setCount(initial-1);
  // console.log(count)
}
function resetHandler()
{
  setCount(0)
}
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className='counter-btn'>
        <button className='decrement' onClick={decrementHandler}>-</button>
        <div className='output'>{initial}</div>
        <button className='increment' onClick={incrementHandler}>+</button>
      </div>
       <button className='reset' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;

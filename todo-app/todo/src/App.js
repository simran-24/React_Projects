import './App.css';
import Heading from './components/Heading'
// import List from './components/List';
import Task from './components/Task'

function App() {
  
  return (
    <div className="App bg-gray-700 w-[100vw] h-[100vh]">
      <Heading/>
      <Task/>
      {/* <List></List> */}
      </div>
  );
}

export default App;

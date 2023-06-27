import './App.css';
import Random from './components/Random';
import NameGif from './components/NameGif';

function App() {
  return (
    <div className="App">
      <h1 className='text-white text-3xl mt-4 text-center w-screen' > Random Gif Generator </h1>
      <div className='flex justify-between w-[1400px] md: mr-auto md:ml-auto mt-10 sm:flex-col sm:ml-5 md:flex-row'>
      <Random/>
      <NameGif/>
      </div>
   
    </div>
  );
}

export default App;

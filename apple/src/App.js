import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [color, setColor] = useState("olive")



  return (
    <>
    <div className="App" style={{backgroundColor: color}} >
      
      <div className='inner-container'> 

      <div className='botton-change'>
    <button onClick={() => setColor('red') }>Red</button>
    <button onClick={() => setColor('white') }>white</button>
        </div>        
       </div>
    </div>
    </>
  );
}

export default App;

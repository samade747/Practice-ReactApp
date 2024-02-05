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
    <button onClick={() => setColor('red') } style={{backgroundColor: 'red', color: "white"}}  >Red</button>
    <button onClick={() => setColor('white')} style={{backgroundColor: "white", color: "black"}}  >white</button>
    <button onClick={() => setColor('black')} style={{backgroundColor: "black", color: "white"}}  >black</button>
    <button onClick={() => setColor('orange')} style={{backgroundColor: "orange", color: "white"}}  >orange</button>
    <button onClick={() => setColor('purple')} style={{backgroundColor: "purple", color: "white"}}  >purple</button>
    <button onClick={() => setColor('pink')} style={{backgroundColor: 'pink', color: "white"}} >pink</button>
        </div>        
       </div>
    </div>
    </>
  );
}

export default App;

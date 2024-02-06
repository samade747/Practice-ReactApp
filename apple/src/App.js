import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [color, setColor] = useState("olive")



  return (
    <>
    <div className="App" style={{backgroundColor: color, border: "10px solid white"}} >
      
      <div className='inner-container'> 

      <div className='botton-change'>
    <button onClick={() => setColor('red') } style={{backgroundColor: 'red', color: "white", borderRadius: "30px"  }}  >Red</button>
    <button onClick={() => setColor('white')} style={{backgroundColor: "white", color: "black", borderRadius: "30px"  }}  >white</button>
    <button onClick={() => setColor('black')} style={{backgroundColor: "black", color: "white", borderRadius: "30px"  }}  >black</button>
    <button onClick={() => setColor('orange')} style={{backgroundColor: "orange", color: "white", borderRadius: "30px"  }}  >orange</button>
    <button onClick={() => setColor('purple')} style={{backgroundColor: "purple", color: "white", borderRadius: "30px"  }}  >purple</button>
    <button onClick={() => setColor('pink')} style={{backgroundColor: 'pink', color: "white", borderRadius: "30px"  }} >pink</button>
        </div>        
       </div>
    </div>
    </>
  );
}

export default App;

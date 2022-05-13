import './index.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Date from './Date';
import Add from './Add';
import Load from './Load';
import Produs from './Produs';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <header>
             <div class='border'>  
             <p>Exercițiu 1</p> 
             </div> 
             <br /> 
      </header>
    <Date />
    <Add />
    <Load />
    <Produs />
    </div>
    
    
  );
}

  


export default App;

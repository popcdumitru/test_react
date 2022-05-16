import { useState, useEffect } from 'react';
import './index.css'; 

function Load() {
  const [count, setCount] = useState(5);
 
  return (
    
      <header>
          <div class='border'>  
        
          setCount ? 'Loading' : 'finish loading';
             </div> 
             <br /> 
      </header>
    
  );
}

export default Load;


//to be continued
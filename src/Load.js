import { useState, useEffect } from 'react';
import './index.css'; 

function Load() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if(!loaded) setLoaded(true);
    }, 5000)
  })

  return (
    
          <div class='border'>
                {loaded ?  'Finished Loading' : 'loading'}
             </div>
    
  );
}

export default Load;


//to be continued stai o 
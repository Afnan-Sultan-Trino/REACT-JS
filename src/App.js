import React from 'react';

import Child from './Componets/FORMS/STATE_LIFTING/Child';

function App() {
 
  const data="I am from parent (App)"


  const handleChildData=(childData)=>{  //creating methods for passing child data to parent
      
    console.log(childData)
  }

  return (
   <div>
    <Child data={data} onChildData={handleChildData}/>
   </div>
  );
}

export default App;

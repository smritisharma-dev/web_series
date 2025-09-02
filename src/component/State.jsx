import React, { useState } from 'react';


function State() {
  const [style1, setstyle] = useState({backgroundColor:"lightgray",fontFamily:"italic"})
    



  const backToggle=()=>{
    
    
    
    
    setstyle(pre=> ({
      backgroundColor: pre.backgroundColor==='lightgray'? 'darkgray' : 'lightgray' ,
  
fontFamily: pre.fontFamily==="italic" ? 'bold':'italic'
})





)}

  return (
    <>
      <div className='' style={{width:"100%", height:"100vh" , backgroundColor:
        style1.backgroundColor , fontFamily:style1.fontFamily
      }}>
<div className='row'>
  <div className='col-12 text-center my-5'>
<p className=' display-3 text-danger'>it is {style1.fontFamily} font</p>
      </div>
      </div>
      <button  className='btn btn-danger' onClick={backToggle}>

       Change</button>
    
    </div>
    
    </>
  );
}

export default State;

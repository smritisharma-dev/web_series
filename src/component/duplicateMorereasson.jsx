import React from "react";
import MoreReasonData from "./MoreReasonData";



const MoreReasonStru=({Feature, reason, icon})=> {
  return (
    <>
    <div
      className="card  container text-white position-relative reasonDiv ms-1 me-2"
      style={{
        background: "linear-gradient(to bottom right, #0d6efd, #dc3545)",
        padding:"1rem" ,
        borderRadius: "1rem",
        
        overflow: "hidden"
      }}
    >


<h3 className="text-start">{Feature}</h3>
<p className="text-start">{reason}</p>

  <div
        className="position-absolute"
        style={{
          bottom: "1rem",
          right: "1rem",
          fontSize: "2rem",
          opacity: 0.9
        }}
      >{icon}</div>
  
  
</div>

    
    
    
    
    </>
  )
}

export default MoreReasonStru
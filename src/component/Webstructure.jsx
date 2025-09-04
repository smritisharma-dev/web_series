import React from "react";
import Data from "./Data.jsx";


const Webstructure =({web})=>{

return(

<>

<div>



    <img  src={web.image} alt="image not found"/>
    <h2 className="card-title text-danger">{web.title}</h2>
    <p className="card-subtitle text-danger">{web.subtitle}</p>
    <a href={web.link} target="_blank"><button className="btn btn-danger" type="button">Watch Now</button></a>
</div>




</>

)


}
export default Webstructure
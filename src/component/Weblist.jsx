import React from "react";
import Data from "./Data.jsx";
import Webstructure from "./Webstructure";

const Weblist = () => {
  return (
    <>
      <div className="container-fluid ">
        {/* Title Row */}
        <div className="row d-flex  justify-content-center fw-bolder text-danger mb-4 ">
          <div className="col-12 col-sm-12 col-md-12 ">
            <h1 className="text-center" >Web Series and Shows</h1>
          </div>
        </div>
{/* Cards Grid */}
        <div className="row d-flex ">
          {Data.map((web) => 
         // web.subtitle === "NetFlix" ? 
         (
            
            
            <div
            
              key={web.id}
              className="col-6 col-sm-6  col-md-3 col-lg-3 col-xl-3 p-2  border text-center "
            >
              <Webstructure web={web} />
              
            </div>
          ) //: null
        )} 
        
      </div>
      </div>
    </>
  );
};

export default Weblist;

import React from "react";

import { useTranslation } from "react-i18next";

import { FaTv, FaDownload, FaMobileAlt, FaChild } from "react-icons/fa";


const iconMap = {
  tv: <FaTv />,
  download: <FaDownload />,
  everywhere: <FaMobileAlt />,
  kids: <FaChild />
};

const MoreReasonStru=()=> {

 const { t } = useTranslation();
  const keys = ["tv", "download", "everywhere", "kids"];


  return (
    <>
    <div className="row d-flex ">
{ keys.map((value,index)=><div
            
              key={index}
              className="col-6 col-sm-6  col-md-3 col-lg-3 col-xl-3 px-2  ">
    <div 
      className="card  container text-white position-relative reasonDiv ms-1 me-2"
      style={{
        background: "linear-gradient(to bottom right, #0d6efd, #dc3545)",
        padding:"1rem" ,
        borderRadius: "1rem",
        
        overflow: "hidden"
      }}
    >


<h3 className="text-start">{t(`moreReasons.${value}.feature`)}</h3>
<p className="text-start">{t(`moreReasons.${value}.reason`)}</p>

  <div
        className="position-absolute"
        style={{
          bottom: "1rem",
          right: "1rem",
          fontSize: "2rem",
          opacity: 0.9
        }}
      > {iconMap[value]}
      
      </div>
  </div>
  
</div>

)
}
    
    </div>
    
    
    </>
  )
}

export default MoreReasonStru
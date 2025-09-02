import React from 'react'
import MoreReasonStru from './MoreReasonStru'
import MoreReasonData from './MoreReasonData'
import { FaThumbsUp , FaThumbsDown} from "react-icons/fa"

function MoreReasonDisplay() {
  return (
    <>
    <div className="row d-flex ">
          {MoreReasonData.map((item) => (
            <div
            
              key={item.id}
              className="col-6 col-sm-6  col-md-3 col-lg-3 col-xl-3 p-1  ">
            
              <MoreReasonStru 
              
              Feature={item.Feature}
              reason={item.reason}
              icon={item.icon}S
              />
              </div>
              
                     )) }           
                       
                       </div>

                       <div className='row d-flex justify-content-between '>

<button ><FaThumbsUp></FaThumbsUp></button>

                       </div>
    
    </>
  )
}

export default MoreReasonDisplay
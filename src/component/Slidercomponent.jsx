import React from "react";
import Data from "./Data.jsx";
import Fetchdata from "./Fetchdata.jsx";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";


// Group data into sets of 4
const groupIntoChunks = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );







   
const Slidercomponent = () => {
  const chunkedData = groupIntoChunks(Data, 4); // 4 cards per slide

  
//Load likes/dislikes from localStorage at start
  const [countup, setUpdate] = useState(() => {
    const saved = localStorage.getItem("likes");
    return saved ? JSON.parse(saved) : {};
  })

  const [countdown, setdown] = useState(() => {
    const saved = localStorage.getItem("dislikes");
    return saved ? JSON.parse(saved) : {};
  })

  //  Save to localStorage whenever counts change
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(countup));
  }, [countup]);

  useEffect(() => {
    localStorage.setItem("dislikes", JSON.stringify(countdown));
  }, [countdown]);



  
  


  const change = (e , movieId) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.currentTarget.id === "like") {
      setUpdate((prev) =>({...prev,

[movieId]: (prev[movieId]||0)+1

      



      }));
    }
  };

const down = (e ,movieId) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.currentTarget.id === "dislike") {

      

        
      
      setdown((prev) => ({...prev,
[movieId]: (prev[movieId] || 0)+1



      }))
    }
  };

  
  return (
    <>
    <div id="carouselExample" className="carousel slide mt-5" data-bs-ride="false"data-bs-interval="false">
      <div className="carousel-inner">
        {chunkedData.map((group, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="d-flex justify-content-around flex-wrap">
              {group.map((item) => (
                <div
                  key={item.id}
                  className="text-center m-2 position-relative"
                  style={{ width: "22%", minWidth: "200px" }}
                >
                  <Link
                  to ="/fetch"
                                           
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
{/* Show the ID in the bottom-left corner */}




                    
                  
                    
            <span className="position-absolute  display-2 bottom-2 start-0 text-white px-2 py-1 rounded"
                       
                                
                                        
                    >{item.id}</span>
                  </Link>
                  <div className="d-flex justify-content-between ">
                   <button  
    id="like"  
    onClick={(e)=>change(e,item.id)}  
    type="button"  
    className="btn btn-black text-danger position-relative"  
    style={{ zIndex: 20 }}   // 👈 Added zIndex
  >             
    <FaThumbsUp /> {countup [item.id]||0}
  </button>
                    

       

                  

                  <button  
    id="dislike"  
    onClick={(e)=>down(e,item.id)}  
    className="btn btn-black text-danger position-relative"  
    style={{ zIndex: 20 }}   // 👈 Added zIndex
  >
    <FaThumbsDown /> {countdown[item.id]||0}
  </button>
                    

                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        style={{ zIndex: 10 }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        style={{ zIndex: 10 }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    </>
  );
};

export default Slidercomponent;

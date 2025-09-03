import React from "react";


//import Weblist from "./Weblist.jsx";
//import MoreReasonDisplay from "./MoreReasonDisplay.jsx";
import NetflixFAQ from "./NetflixFAQ.jsx";
import Banner from "./Banner.jsx";
import SliderComponent from "./Slidercomponent.jsx";
import { useTranslation } from "react-i18next";
import MoreReasonStru from "./MoreReasonStru.jsx";
import netflix from '../assets/img/netflix.jpg';




const Home = () => {

  const{t} = useTranslation()
  return (
    <>
      <div className="container-fluid">
        {/* Banner Saction */}
        <div className="row position-relative text-white">
          
            <img className="img1 img-fluid w-100 opacity-25" style={{ height: '100vh', objectFit: 'cover' }}  
            src={netflix}alt="pic not found">
            
            </img>
          
          <Banner></Banner>
        </div>
</div>
{/* Tranding Now Section */}
{/*line divider */}
<div className="container-fluid">
<div className="row mt-5 hr-curve">

</div>
<div className="row  mb-5 " 
style={{ backgroundImage: "linear-gradient(to bottom right, red, blue) " ,
  
  height:"5px",
  border:"none",
  
  }}



>


</div>
</div>

{/*line divider  ends */}
  
  
   {/* Trending now slide section starts*/ } 
<div className="container">

    <div className="row">
    <h1 className="text-white">{t("home.trending")}</h1>
  </div>
        <SliderComponent></SliderComponent>
        
      
<div className="row my-3">

    <h1 className="text-white text-start my-4">{t("home.moreReasons")}</h1>
</div>
<MoreReasonStru></MoreReasonStru>
<div className="row">

  <h1 className="Text-start text-white my-4">{t("home.faq")}</h1>
</div>


{/* Trending now slide section  ends*/ } 


{/* FAQ section starts*/ }

  <NetflixFAQ></NetflixFAQ>
  <div className="row">
    <div className="col-12">

      
    </div>
  </div>
  {/* FAQ section ends*/ }
  {/* Ready to watch section starts*/ }
  <div className="row  my-5">

    <div className="col-10 mx-auto">
<p className="h5 text-white ms-5">
        {t("home.ready")}
        </p>
       <div className="input-group text-white mb-3">
          <input
            type="email"
             className="form-control bg-dark text-white border-secondary custom-placeholder"
            placeholder={t("home.placeholder")}
            aria-label="Email Address"
            style={{ width: "300px" }}
            aria-describedby="button-addon2"
          />&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-danger btn-lg text-white"
            id="button-addon2"
          >
            {t("home.button")}
          </button>
          </div>
          {/* Ready to watch section ends*/ }
    </div>
  </div>
</div>

    </>
  );
};

export default Home;

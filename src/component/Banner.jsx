import React from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {

  const{t} = useTranslation()
  return (
    <>
      <div
        className=" row position-absolute top-50 start-50 translate-middle text-center p-4"
        
          
          
          
      
      >
        <div className="col-6 mx-auto">
        <h1 className="display1-1 ">{t("banner.title1")}</h1>
        <h1 className="display-3">{t("banner.title2")}</h1>
        <p className="h4">{t("banner.subtitle")}</p>
        <p className="h5">
          {t("banner.ready")}
        </p>

        <div className="input-group text-white mb-3">
          <input
            type="email"
             className="form-control bg-dark text-white border-secondary custom-placeholder"
            placeholder={t("banner.placeholder")}
            aria-label="Email Address"
            style={{ width: "300px" }}
            aria-describedby="button-addon2"
          />&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-danger btn-lg text-white"
            id="button-addon2"
          >
            {t("banner.button")}
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

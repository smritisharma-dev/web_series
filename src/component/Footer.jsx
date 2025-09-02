import React from "react"


import LanguageSelector from "./LanguageSelector"
import { useTranslation } from "react-i18next"


const Footer=()=>{

    const{t}= useTranslation()
 return(
<>

<div className="container my-5">


<div className="row my-2">


    <div className="col-12 col-md-12 ms-4">
<h2 className="fs-5 text-white text-start">{t("footer.questions")}{""} <a className="text-white" href="tel:9891904734">tel:9891904734</a></h2>


    </div>
    </div>
    <div className="row d-flex my-2 fw-light">
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white fw-light" href="/">{t("footer.links.faq")}</a>

</div>

<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.faq")} </a>

</div>
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.help")} </a>

</div>
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.account")} </a>

</div>



    </div>
    <div className="row d-flex fw-light my-2">
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.media")}</a>

</div>

<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.investor")}</a>

</div>
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">
{t("footer.links.jobs")}</a>

</div>
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.waysToWatch")} </a>

</div>



    </div>
<div className="row d-flex  fw-light my-2">
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">
{t("footer.links.terms")} </a>

</div>

<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">{t("footer.links.privacy")} </a>

</div>
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">
{t("footer.links.cookie")} </a>

</div>
<div className="col-6 col-md-3  justify-content-evenly text-white ">

<a className="text-white" href="/">
{t("footer.links.corporate")} </a>

</div>



    </div>
    <div className="my-4 ms-0">
    <LanguageSelector></LanguageSelector>
    </div>
    <p className="text-white my-4">{t("footer.netflixIndia")}</p>
    </div>

        
    






</>



 )




}
export default Footer
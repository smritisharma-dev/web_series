import React from "react"
import  { useTranslation }  from "react-i18next"

const LanguageSelector =()=>{

const {i18n} = useTranslation()

const handler = (e)=>{

    i18n.changeLanguage(e.target.value)

}
    return(


<select className=" bg-dark border-primary text-white form-select mx-2" onChange={handler} value={i18n.language}

style={{ width: "auto" }}

>

<option value="en">English</option>
<option value="hi">हिंदी</option>

</select>


    )

}

export default LanguageSelector
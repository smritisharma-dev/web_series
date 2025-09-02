import React from "react";
import { useTranslation } from "react-i18next";

const NetflixFAQ = () => {
  const { t } = useTranslation();
  const faqData = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"];

  return (
    <div className="accordion" id="accordionExample">
      {faqData.map((item, index) => (
        <div
          className="accordion-item bg-dark fs-4 text-white border-0 mb-2"
          key={item} // use item as key
        >
          <h2 className="accordion-header" id={`heading-${item}`}>
            <button
              className={`accordion-button bg-dark fs-4 text-white ${
                index !== 0 ? "collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${item}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse-${item}`}
            >
              {t(`faq.${item}.question`)}
            </button>
          </h2>
          <div
            id={`collapse-${item}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading-${item}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-dark text-white">
              {t(`faq.${item}.answer`)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetflixFAQ;

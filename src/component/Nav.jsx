import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from "react-i18next";
import LanguageSelector from './LanguageSelector';

const Nav = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <span className="fs-3">Net</span><span className="text-danger fs-4 fst-italic">Flix</span>
        </Link>
        

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex align-items-center gap-2">
<LanguageSelector></LanguageSelector>
        

          {/* Right Sign in Button */}
          <Link to="/signin" className="btn bg-danger bordert text-white btn btn-medium">{t("navbar.Signin")}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

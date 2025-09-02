import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

export default function NetflixNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark "> {/* Changed padding to py-2 to reduce height */}
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fs-3">Net</span>
          <span className="text-danger fs-4 fst-italic">Flix</span>
        </Link>

        {/* Toggle for mobile */}
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

        {/* Right Side: Language + Sign In */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex align-items-center gap-2">
            <LanguageSelector className="form-select form-select-sm" style={{ height: '38px' }} /> {/* Fixed height */}
            <Link to="/signin" className="btn btn-danger btn-sm" style={{ height: '38px', lineHeight: '24px' }}>Sign In</Link> {/* Fixed height */}
          </div>
        </div>
      </div>
    </nav>
  );
}


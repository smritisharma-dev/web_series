import React, { useState } from 'react';

function State() {
  // State for background color and font style
  const [style1, setStyle] = useState({
    backgroundColor: "lightgray",
    fontStyle: "italic"
  });

  // Function to toggle background and font style
  const backToggle = () => {
    setStyle(prev => ({
      backgroundColor: prev.backgroundColor === 'lightgray' ? 'darkgray' : 'lightgray',
      fontStyle: prev.fontStyle === "italic" ? 'normal' : 'italic'
    }));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: style1.backgroundColor,
        fontStyle: style1.fontStyle
      }}
    >
      <div className="row">
        <div className="col-12 text-center my-5">
          <p className="display-3 text-danger">
            It is {style1.fontStyle} font
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-danger" onClick={backToggle}>
          Change
        </button>
      </div>
    </div>
  );
}

export default State;

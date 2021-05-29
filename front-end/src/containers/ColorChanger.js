import React, { useState } from "react";
// import Toggle from './ToggleGame.js'

const Color = () => {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div>
      <div
        className="bannerFondo"
        style={{
          backgroundColor: `${hex}`,
          minHeight: "33.34vh",
          overflow: "hidden",
          zoom: 3,
        }}
      >
        <button className="sm-btn focus:outline-none" onClick={randomizedHex}>
          Randomize Color
        </button>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="float-right max-w-xs m-4 my-2 overflow-hidden border-4 border-opacity-50 rounded shadow border-light-blue-500">
          {/* <Toggle /> */}
        </div>
      </div>
    </div>
  );
};

export default Color;

import React, { useState } from "react";
import Toggle from './ToggleGame.js'

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
        <button className="sm-btn" onClick={randomizedHex}>
          Randomize Color
        </button>
        <div className="divider"></div>
        <Toggle />
      </div>
    </div>
  );
};

export default Color;

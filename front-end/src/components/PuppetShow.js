import React, { useState } from "react";
import ReactPlayer from "react-player";
import sheep from "../images/sheep-avatar.png";
import { Link } from "react-router-dom";
import playlogo from "../images/sunnyplay.png";

export default function Musicplayer(props) {
  // console.log(props)

  const [url, setUrl] = useState("https://youtu.be/5uTaz8jTjaE");
     const characterPic = localStorage.getItem("character");
        
  return (
    <div>
      <div className="bannerFondo">
        <div className="float-right">
          <Link to="/myplayground">
            <img
              className="m-4 rounded-full hvr-pulse"
              src={characterPic}
              alt="user"
            />
          </Link>
        </div>
      </div>
      <div className="-mt-64 ">
        <div className="w-full text-center">
          <h1 className="text-5xl font-bold text-white">
            <Link to="/playground">
              <img className="playlogo" src={playlogo} alt="logo" />
            </Link>
            <div className="divider"></div>
          </h1>
        </div>
      </div>

      <center>
        <div className="container items-center pt-4">
          <div className="flex items-center w-1/4 p-2 bg-white shadow bg-opacity-80 rounded-xl ">
            <div className="flex items-center "></div>
            <div className="flex-grow p-2">
              <div className="lg-pageheading">puppets</div>
            </div>
          </div>
        </div>
      </center>
      <div className="music-player">
        <button
          className="mp-button-space focus:outline-none"
          onClick={() => setUrl("https://youtu.be/0NpQronsFic")}
        >
          <img className="hvr-pulse" src={sheep} alt="sheeplogo" />
        </button>
      </div>
      <div className="music-player-buttons">
        <ReactPlayer url={url} />
        <div className="divider"></div>
      </div>
    </div>
  );
}

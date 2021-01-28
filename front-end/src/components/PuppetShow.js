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
              className="rounded-full m-4 hvr-pulse"
              src={characterPic}
              alt="user"
            />
          </Link>
        </div>
      </div>
      <div className="-mt-64 ">
        <div className="w-full text-center">
          <h1 className="font-bold text-5xl text-white">
            <Link to="/playground">
              <img className="playlogo" src={playlogo} alt="logo" />
            </Link>
            Welcome to the puppet show!
          </h1>
        </div>
      </div>
      <div className="music-player">
        <button
          className="mp-button-space"
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

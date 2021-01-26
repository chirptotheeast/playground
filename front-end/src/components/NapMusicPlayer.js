import React, { useState } from "react";
import ReactPlayer from "react-player";
import heart from "../images/heart-avatar.PNG";
import sheep from "../images/sheep-avatar.png";
import { Link } from "react-router-dom";
import playlogo from "../images/sunnyplay.png";


export default function Musicplayer(props) {
  // console.log(props)

  const [url, setUrl] = useState("https://www.youtube.com/playlist?list=PLj5CbpRClQ4Q7g1dXsF62tBajbFpRC34k");

  return (
    <div>
      <div className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x"></div>
      <div className="-mt-64 ">
        <div className="w-full text-center">
          <h1 className="font-bold text-5xl text-white">
            <Link to="/playground">
              <img className="playlogo" src={playlogo} alt="logo" />
            </Link>
            sleepy time
          </h1>
        </div>
      </div>
      <div className="music-player">
        <button
          className="mp-button-space"
          onClick={() =>
            setUrl(
              "https://www.youtube.com/watch?v=GzOf517T1uQ&ab_channel=BabyRelaxChannel"
            )
          }
        >
          <img src={sheep} alt="heartlogo" />
        </button>
      </div>
      <div className="music-player-buttons">
        <ReactPlayer url={url} />
        <div className="divider"></div>
      </div>
    </div>
  );
}

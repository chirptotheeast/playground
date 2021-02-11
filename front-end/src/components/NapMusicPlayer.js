import React, { useState } from "react";
import ReactPlayer from "react-player";

import sheep from "../images/sheep-avatar.png";
import { Link } from "react-router-dom";
import playlogo from "../images/sunnyplay.png";
import cloud from '../images/cloudicon.png'
import water from '../images/watermusicicon.png'


export default function Musicplayer(props) {
  // console.log(props)

  const [url, setUrl] = useState(
    "https://www.youtube.com/watch?v=4WEdhyuzdJI&list=PLj5CbpRClQ4Tyz0H3P7Se4gVCweW0-VpX&ab_channel=BabyRelaxChannel"
  );
     const characterPic = localStorage.getItem("character");
  return (
    <div>
      <div className="bannerFondo ">
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
      <div className="smdivider"></div>
      <div className="-mt-64 ">
        <div className="w-full text-center">
          <h1 className="text-5xl font-bold text-white">
            <Link to="/playground">
              <img className="playlogo" src={playlogo} alt="logo" />
            </Link>
          </h1>
        </div>
      </div>
      <div className="smdivider"></div>
      <center>
        <div className="container items-center pt-4">
          <div className="flex items-center w-1/4 p-2 bg-white shadow bg-opacity-80 rounded-xl ">
            <div className="flex items-center "></div>
            <div className="flex-grow p-2">
              <div className="lg-pageheading">Naptime</div>
            </div>
          </div>
        </div>
      </center>
      <div className="music-player">
        <button
          className="mp-button-space focus:outline-none"
          onClick={() =>
            setUrl(
              "https://www.youtube.com/watch?v=JkiKX-qvGe8&ab_channel=BabyRelaxChannel"
            )
          }
        >
          <img className="hvr-pulse" src={sheep} alt="sheeplogo" />
        </button>
        <button
          className="mp-button-space focus:outline-none"
          onClick={() =>
            setUrl(
              "https://www.youtube.com/watch?v=XP5B0Bp_4pU&ab_channel=321Relaxing-MeditationRelaxClips"
            )
          }
        >
          <img src={water} alt="waterlogo" className="hvr-pulse" />
        </button>
        <button
          className="mp-button-space focus:outline-none"
          onClick={() =>
            setUrl(
              "https://www.youtube.com/watch?v=HnhjRCEnIFo&ab_channel=WonderfulLullabies"
            )
          }
        >
          <img src={cloud} alt="waterlogo" className="hvr-pulse" />
        </button>
      </div>
      <div className="music-player-buttons ">
        <ReactPlayer url={url} />
        <div className="divider"></div>
      </div>
    </div>
  );
}

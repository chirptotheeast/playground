import React, { Component } from "react";
import playlogo from "../images/sunnyplay.png";
import Musicplayer from "../containers/Musicplayer.js";
import { Link } from "react-router-dom";
import Drummachine from "../containers/DrumMachine.js"

export default class Music extends Component {
  
  render() {
          const characterPic = localStorage.getItem("character");
    return (
      <div>
        <div className="bg-yellow-100 bg-left-top bg-repeat-x bg-auto bannerFondo">
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
            </h1>
          </div>
        </div>
        <div className="divider"></div>
        <center>
          <div className="container items-center pt-4">
            <div className="flex items-center w-1/4 p-2 bg-white shadow bg-opacity-80 rounded-xl ">
              <div className="flex items-center "></div>
              <div className="flex-grow p-2">
                <div className="lg-pageheading">Music</div>
              </div>
            </div>
          </div>
        </center>
        <div className="smdivider"></div>
        <div>
          <Musicplayer
            youtubelink={this.props.activities
              ?.filter((activity) => activity.youtube_video)
              .map((acty) => {
                return { youtube_link: acty.video_link, avatar: acty.avatar };
              })}
          />
        </div>
        <div className="divider"></div>
        <hr></hr>
        <div className="divider"></div>
        <div className="music-player">
          <Drummachine />
        </div>
      </div>
    );
  }
}

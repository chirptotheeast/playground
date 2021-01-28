import React, { Component } from "react";
import playlogo from "../images/sunnyplay.png";
import Musicplayer from "../containers/Musicplayer.js";
import { Link } from "react-router-dom";
// import Keyboard from "../containers/Keyboard.js";
import Drummachine from "../containers/DrumMachine.js"

export default class Music extends Component {
  
  render() {
          const characterPic = localStorage.getItem("character");
    return (
      <div>
        <div className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x">
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
            </h1>
          </div>
        </div>
        <div className="divider"></div>
        <center>
          <div className="container items-center pt-4">
            <div className="bg-white bg-opacity-80 w-1/4 flex items-center p-2 rounded-xl shadow ">
              <div className="flex items-center "></div>
              <div className="flex-grow p-2">
                <div className="lg-pageheading">Music</div>
              </div>
            </div>
          </div>
        </center>
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

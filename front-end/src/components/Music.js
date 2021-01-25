import React, { Component } from "react";
import playlogo from "../images/sunnyplay.png";
import Musicplayer from "../containers/Musicplayer.js";
import { Link } from "react-router-dom";
import Keyboard from "../containers/Keyboard.js";
// import { act } from '@testing-library/react';

export default class Music extends Component {
  render() {
    return (
      <div>
        <div className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x"></div>
        <div className="-mt-64 ">
          <div className="w-full text-center">
            <h1 className="font-bold text-5xl text-white">
              <Link to="/playground">
                <img className="playlogo" src={playlogo} alt="logo" />
              </Link>
              music!
            </h1>
          </div>
        </div>
        <div className="divider"></div>
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
          <Keyboard />
        </div>
      </div>
    );
  }
}

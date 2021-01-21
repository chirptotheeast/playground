import React, { Component } from 'react'
import playlogo from "../images/lgplaygroundlogo.png";
import Musicplayer from "../containers/Musicplayer.js"
import { Link } from "react-router-dom";
import Keyboard from "../containers/Keyboard.js"

export default class Music extends Component {
    render() {
        return (
          <div>
            <div
              className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x"
              style={{ backgroundImage: `url(./img/bear-avatar.png)` }}
            ></div>
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
              <Musicplayer />
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

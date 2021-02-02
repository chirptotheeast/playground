import React, { Component } from 'react'
import playlogo from "../images/sunnyplay.png";
import { Link } from "react-router-dom";
import ColorChanger from "../containers/ColorChanger.js"

export default class Games extends Component {
    render() {
       const characterPic = localStorage.getItem("character");
        return (
          <div>
            <div className="bannerFondo ">
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
            <div className="smdivider"></div>

            <div className="-mt-64 ">
              <div className="w-full text-center">
                <h1 className="font-bold text-5xl text-white">
                  <Link to="/playground">
                    <img className="playlogo" src={playlogo} alt="logo" />
                  </Link>
                </h1>
              </div>
            </div>
            <div className="bannerFondo ">
              <ColorChanger />
            </div>
          </div>
        );
    }
}

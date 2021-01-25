import React, { Component } from 'react'
import playlogo from "../images/sunnyplay.png";
import { Link } from "react-router-dom";
import ColorChanger from "../containers/ColorChanger.js"

export default class Games extends Component {
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
                  games!
                </h1>
              </div>
            </div>
            <div className="bannerFondo">
              <ColorChanger />
            </div>
          </div>
        );
    }
}

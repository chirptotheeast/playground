import React, { Component } from 'react';
import playlogo from "../images/lgplaygroundlogo.png";
import { Link } from "react-router-dom";

export default class Drawing extends Component {
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
                </h1>
              </div>
            </div>
            Drawings go here
          </div>
        );
    }
}

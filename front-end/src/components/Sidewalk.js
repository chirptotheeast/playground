import React, { Component } from 'react'
import sidewalk from "../images/sidewalk.png";

export default class Thesidewalk extends Component {
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
                  <img className="playlogo" src={sidewalk} alt="logo" />
                </h1>
              </div>
            </div>
          </div>
        );
    }
}

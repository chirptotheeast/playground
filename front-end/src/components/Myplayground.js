import React, { Component } from 'react'
import myplaylogo from '../images/myplayground.png'
import home from "../images/home.png"

export default class Myplayground extends Component {
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
                  <img className="playlogo" src={myplaylogo} alt="logo" />
                  <img className="playlogo" src={home} alt="logo" />
                </h1>
              </div>
            </div>
          </div>
        );
    }
}

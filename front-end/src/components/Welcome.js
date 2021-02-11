import React, { Component } from 'react'
import logo from '../images/welcomeplaygroundlogo.png'
import { Link } from "react-router-dom";


export default class Welcome extends Component {
    render() {
        return (
          <div className="flex-container">
            <div className="rcorners1">
              <div className="inner-div">
                <img
                  className="welcomelogo hvr-wobble-vertical"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="divider"></div>
              <Link to="/choose">
                <button className="btn hvr-pulse focus:outline-none">
                  let's play!
                </button>
              </Link>
              <Link to="/login">
                <button className="btn hvr-pulse focus:outline-none">
                  login
                </button>
              </Link>
              <Link to="/register">
                <p className="createaccount p-play">create account</p>
              </Link>
            </div>
          </div>
        );
    }
}





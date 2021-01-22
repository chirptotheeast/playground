import React, { Component } from 'react'
import playlogo from "../images/lgplaygroundlogo.png";
import drawicon from "../icons/playdrawicon.PNG";
import gameicon from "../icons/playgameicon.PNG";
import musicicon from "../icons/playmusicicon.PNG";
import sidewalkicon from "../icons/playsidewalkicon.PNG";
import { Link } from "react-router-dom";
import sidewalk from "../images/sidewalk.png"
import homelogo from "../images/home.png"




export default class Playground extends Component {
  
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
                  <img className="playlogo" src={playlogo} alt="logo" />
                  <Link to="/myplayground">
                    <img className="playlogo" src={homelogo} alt="logo" />
                  </Link>
                </h1>
              </div>
            </div>
            <div className="divider"></div>

            <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
              <div className="md:grid md:h-32 md:grid-flow-row md:gap-14 md:grid-cols-3">
                <div
                  id="jh-stats-positive"
                  className="flex flex-col justify-center px-8 py-8 bg-white border border-gray-300 rounded shadow-lg"
                >
                  <Link to="/music">
                    <div>
                      <p className="p-play text-3xl font-sans text-center text-gray-800 cursor-pointer">
                        music
                      </p>

                      <img
                        className="playlogo imgnobr"
                        src={musicicon}
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-negative"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-purple-300 border border-gray-300 rounded sm:mt-0 shadow-lg"
                >
                  <Link to="/drawing">
                    <div>
                      <p className="text-3xl font-semibold text-center text-gray-800 cursor-pointer">
                        drawing
                      </p>
                      <img className="playlogo" src={drawicon} alt="logo" />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-neutral"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0 shadow-lg"
                >
                  <Link to="/games">
                    <div>
                      <p className="text-3xl font-semibold text-center text-gray-800 cursor pointer">
                        games
                      </p>
                      <img className="playlogo" src={gameicon} alt="logo" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <Link to="/sidewalk">
              <img className="playlogo" src={sidewalk} alt="logo" />
            </Link>
          </div>
        );
    }
}

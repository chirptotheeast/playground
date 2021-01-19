import React, { Component } from 'react'
import playlogo from "../images/lgplaygroundlogo.png";
import drawicon from "../icons/playdrawicon.PNG";
import gameicon from "../icons/playgameicon.PNG";
import musicicon from "../icons/playmusicicon.PNG";
import sidewalkicon from "../icons/playsidewalkicon.PNG";
import { motion } from "framer-motion";

export default class NewPlay extends Component {
    render() {
        return (
          <div>
            <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
              <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                <div
                  id="jh-stats-positive"
                  className="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded"
                >
                  <div>
                  
                    <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor-pointer">
                      music
                    </p>
                    <img
                      className="playlogo imgnobr"
                      src={musicicon}
                      alt="logo"
                    />
                  </div>
                </div>

                <div
                  id="jh-stats-negative"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0"
                >
                  <div>
                    <p className="text-3xl font-semibold text-center text-gray-800 cursor-pointer">
                      drawing
                    </p>
                    <img className="playlogo" src={drawicon} alt="logo" />
                  </div>
                </div>

                <div
                  id="jh-stats-neutral"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0"
                >
                  <div>
                    
                    <p className="text-3xl font-semibold text-center text-gray-800 cursor pointer">
                      games
                    </p>
                    <img className="playlogo" src={gameicon} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

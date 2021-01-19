import React, { Component } from 'react'
import playlogo from '../images/lgplaygroundlogo.png'
import drawicon from '../icons/playdrawicon.PNG'
import gameicon from '../icons/playgameicon.PNG'
import musicicon from '../icons/playmusicicon.PNG'
import sidewalkicon from '../icons/playsidewalkicon.PNG'


export default class Playground extends Component {

    

  
    render() {
        const mystyle = {
            fontSize: "48px"
        };
        return (
          <div>
            <div
              className="bannerFondo bg-gray-300 bg-left-top bg-auto bg-repeat-x"
              style={{ backgroundImage: `url(./img/bear-avatar.png)` }}
            ></div>
            <div className="-mt-64 ">
              <div className="w-full text-center">
                <h1 className="font-bold text-5xl text-white">
                  <img className="playlogo" src={playlogo} alt="logo" />
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4  ">
              <div className="p-2 sm:p-10 text-center cursor-pointer">
                <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                  <div className="space-y-10">
                    <i class="fa fa-spa" style={mystyle}></i>

                    <div className="px-8 py-6">
                      <div className="space-y-5">
                        <div className="font-bold text-4xl mb-2">music</div>
                        <h2 className="text-gray-700 text-base">
                          <img
                            className="playlogo"
                            src={musicicon}
                            alt="logo"
                          />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer text-white">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-purple-500 hover:bg-orange-600 transition duration-500">
                <div class="space-y-10">
                  <i class="fa fa-head-side-mask" style={mystyle}></i>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-4xl mb-2">drawing</div>

                      <h2 class="text-base">
                        <img className="playlogo" src={drawicon} alt="logo" />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                <div class="space-y-10">
                  <i class="fa fa-swimmer" style={mystyle}></i>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-4xl mb-2">games</div>

                      <h2 class="text-gray-700 text-base">
                        <img className="playlogo" src={gameicon} alt="logo" />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                <div class="space-y-10">
                  <i class="fa fa-swimmer" style={mystyle}></i>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-4xl mb-2">sidewalk</div>

                      <h2 class="text-gray-700 text-base">
                        <img className="playlogo" src={sidewalkicon} alt="logo" />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}



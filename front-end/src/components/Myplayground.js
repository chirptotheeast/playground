import React, { Component } from 'react'
import myplaylogo from '../images/myplayground.png'
import home from "../images/home.png"
import sidewalk from "../images/sidewalk.png"
import { Link } from "react-router-dom";
import play from "../images/sunnyplay.png"
import CanvasDraw from "react-canvas-draw";

export default class Myplayground extends Component {
    render() {
    //  this.props.drawings.map(drawing => {
    //       const newdraw = localStorage.setItem("drawing", drawing.svgdrawing);
       
    //     console.log(newdraw);
    //   });



  


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
                  <div className="smdivider"></div>
                  <img className="playlogo" src={home} alt="logo" />
                </h1>
              </div>
            </div>

            <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
              <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 ">
                <nav className="border-b bg-white px-7 py-4 flex items-center min-w-0 h-17">
                  <h1 className="font-semibold text-lg"></h1>
                  {/* <span className="flex-1"></span>
                  <span className="mr-2"> */}
                  {/* <input
                      type="text"
                      placeholder="Search"
                      className="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
                    /> */}
                  {/* </span> */}
                  <Link to="/playground">
                    <img src={play} alt="logo" />
                  </Link>
                  <div className="wide-divider"></div>
                  <Link to="/sidewalk">
                    <img src={sidewalk} alt="sidewalklogo" />
                  </Link>
                  {/* <button className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <i className="fas fa-user fill-current"></i>
                  </button> */}
                </nav>

                <div className="grid grid-cols-3 gap-4">
                  {this.props.drawings.map((drawing) => {
                    return (
                      <div className="flex-container">
                        <div className="container-images">
                          <CanvasDraw
                            disabled
                            hideGrid
                            ref={(canvasDraw) =>
                              (this.loadableCanvas = canvasDraw)
                            }
                            saveData={drawing.svgdrawing}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </main>
            </section>
          </div>
        );
    }
}

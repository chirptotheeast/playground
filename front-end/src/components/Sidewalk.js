import React, { Component } from 'react'
import sidewalk from "../images/sidewalk.png";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import play from "../images/lgplaygroundlogo.png";

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

            {/* <button
              onClick={() => {
                this.loadableCanvas.loadSaveData(
                  localStorage.getItem("savedDrawing")
                );
              }}
            >
              {/* Load what you saved previously into the following canvas. Either
              by calling `loadSaveData()` on the component's reference or
              passing it the `saveData` prop: 
              
              </button>*/}
            <nav className="border-b bg-white px-7 py-4 flex items-center min-w-0 h-17">
              <h1 className="font-semibold text-lg"></h1>
            
              <Link to="/playground">
                <img src={play} alt="logo" />
              </Link>
              <div className="wide-divider"></div>
             
       
            </nav>

            <div className="grid grid-cols-3 gap-4">
              {this.props.drawings.map((drawing) => {
                return (
                  <div className="flex-container">
                    <div className="container-images">
                      <CanvasDraw
                        disabled
                        hideGrid
                        ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
                        saveData={drawing.svgdrawing}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
    }
}

import React, { Component } from 'react'
import myplaylogo from '../images/bigmyplayground.png'
import sidewalk from "../images/sidewalk.png"
import { Link } from "react-router-dom";
import play from "../images/sunnyplay.png"
import CanvasDraw from "react-canvas-draw";
import axios from "axios";


export default class Myplayground extends Component {
  state = {
    favorite_drawings: [],
  };

  updateDraw = (id) => {
    this.setState({
      favorite_drawings: this.state.favorite_drawings.filter((drawing) => {
        return drawing.id !== id;
      }),
    });
  };

  removeDraw(id) {
    fetch("http://localhost:3001/favorite_drawings/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((resp) => this.updateDraw(id));
  }

  componentDidMount() {
    axios
      .get("/favorite_drawings", { withCredentials: true })
      .then((response) => {
        const favorite_drawings = response.data;
        this.setState({ favorite_drawings });
      });
  }

  render() {
    const characterPic = localStorage.getItem("character");
    return (
      <div>
        <div className="bannerFondo"></div>

        <div className="-mt-64 ">
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold text-white">
              <img className="playlogo" src={myplaylogo} alt="logo" />
              <div className="smdivider"></div>
            </h1>
          </div>
        </div>

        <nav className="flex items-center min-w-0 py-4 bg-white border-b border-indigo-300 px-7 h-17">
          <Link to="/playground">
            <img className="hvr-pulse" src={play} alt="logo" />
          </Link>
          <div className="wide-divider"></div>
          <Link to="/sidewalk">
            <img className="hvr-pulse" src={sidewalk} alt="sidewalklogo" />
          </Link>
        </nav>

        <center>
          <div className="container items-center pt-20">
            <div className="flex items-center w-1/4 p-2 bg-white border-8 border-yellow-300 border-double shadow bg-opacity-95 rounded-xl">
              <div className="flex items-center "></div>
              <div className="flex-grow p-2">
                <div className="pageheading">
                  my favorite drawings
                </div>
              </div>
            </div>
          </div>
        </center>

        <div className="flex">
          <div className="float-left max-w-sm m-4">
            <div className="py-3 bg-white rounded-lg shadow-xl">
              <div className="p-2 photo-wrapper">
                <img
                  className="mx-auto rounded-full"
                  src={characterPic}
                  alt="user"
                />
              </div>

              <div className="p-2">
                <h3 className="text-xl font-medium leading-8 text-center text-gray-900">
                  Hello,
                </h3>
                <div className="font-semibold text-center text-pink-400 text-s">
                  Playgrounder!
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 m-3">
            {this.state.favorite_drawings.reverse().map((drawing) => {
              return (
                <div className="flex-container">
                  <div className="box-border p-6 bg-green-100 bg-opacity-50 border-4 shadow lg:box-content h-480 w-480">
                    <center>
                      <CanvasDraw
                        disabled
                        hideGrid
                        ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
                        saveData={drawing.drawing}
                      />

                      <button
                        className="sm-bttn focus:outline-none"
                        onClick={() => this.removeDraw(drawing.id)}
                      >
                        delete
                      </button>
                    </center>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import myplaylogo from '../images/bigmyplayground.png'
import home from "../images/home.png"
import sidewalk from "../images/sidewalk.png"
import { Link } from "react-router-dom";
import play from "../images/sunnyplay.png"
import CanvasDraw from "react-canvas-draw";


export default class Myplayground extends Component {
  

    removeDraw(id){
     fetch("http://localhost:3001/favorite_drawings/" + id, {
       method: "DELETE",
      headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
      .then( resp => this.props.updateDraw(id))
      console.log(this.props);
    }

    render() {
 
      const characterPic = localStorage.getItem('character')

        return (
          <div>
            <div className="bannerFondo"></div>

            <div className="-mt-64 ">
              <div className="w-full text-center">
                <h1 className="text-5xl font-bold text-white">
                  <img className="playlogo" src={myplaylogo} alt="logo" />
                  <div className="smdivider"></div>
                  {/* <img className="py-2 playlogo" src={home} alt="logo" /> */}
                </h1>
              </div>
            </div>

            {/* <section className="flex flex-col-reverse w-screen h-screen min-w-0 min-h-0 overflow-hidden bg-teal-200 sm:flex-row"> */}
            {/* <main className="flex flex-col flex-1 min-w-0 min-h-0 sm:h-full "> */}
            <nav className="flex items-center min-w-0 py-4 bg-white border-b border-indigo-300 px-7 h-17">
              <h1 className="text-lg font-semibold"></h1>
              {/* <span className="flex-1"></span>
                  <span className="mr-2"> */}
              {/* <input
                      type="text"
                      placeholder="Search"
                      className="w-full px-2 py-1 bg-gray-300 border border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-gray-100"
                    /> */}
              {/* </span> */}
              <Link to="/playground">
                <img className="hvr-pulse" src={play} alt="logo" />
              </Link>
              <div className="wide-divider"></div>
              <Link to="/sidewalk">
                <img className="hvr-pulse" src={sidewalk} alt="sidewalklogo" />
              </Link>
              {/* <button className="w-10 h-10 ml-2 ml-auto leading-none text-center text-gray-200 bg-gray-400 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <i className="fill-current fas fa-user"></i>
                  </button> */}
            </nav>

            <center>
              <div className="container items-center pt-20">
                <div className="flex items-center w-1/4 p-2 bg-white border-8 border-yellow-300 border-double shadow bg-opacity-95 rounded-xl">
                  <div className="flex items-center "></div>
                  <div className="flex-grow p-2">
                    <div className="pageheading">
                  my favorite drawings
                      {/* <img
                        src={bee}
                        alt="My profile"
                        className="w-16 h-16 hvr-buzz"
                      /> */}
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
                      <h4>{localStorage.getItem("user")}!</h4>
                    </div>
                    {/* <table className="my-3 text-xs">
                    <tbody>
                  <tr>
                    <td className="px-2 py-2 font-semibold text-gray-500">username</td>
                    <td className="px-2 py-2">__username here__</td>
                  </tr>
                   </tbody>
                 </table> */}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 m-3">
                {this.props.favdrawings.map((drawing) => {
                  return (
                    <div className="flex-container">
                      <div className="box-border p-6 bg-green-100 bg-opacity-50 border-4 shadow lg:box-content h-480 w-480">
                        <center>
                          <CanvasDraw
                            disabled
                            hideGrid
                            ref={(canvasDraw) =>
                              (this.loadableCanvas = canvasDraw)
                            }
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
            {/* </main> */}
            {/* </section> */}
          </div>
        );
    }
}

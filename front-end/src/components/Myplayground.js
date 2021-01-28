import React, { Component } from 'react'
import myplaylogo from '../images/bigmyplayground.png'
import home from "../images/home.png"
import sidewalk from "../images/sidewalk.png"
import { Link } from "react-router-dom";
import play from "../images/sunnyplay.png"
import CanvasDraw from "react-canvas-draw";


export default class Myplayground extends Component {
  

    removeDraw(id){
     fetch("http://localhost:3000/favorite_drawings/" + id, {
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
            <div
              className="bannerFondo"
            ></div>

            <div className="-mt-64 ">
              <div className="w-full text-center">
                <h1 className="font-bold text-5xl text-white">
                  <img className="playlogo" src={myplaylogo} alt="logo" />
                  <div className="smdivider"></div>
                  {/* <img className="playlogo py-2" src={home} alt="logo" /> */}

                </h1>
              </div>
            </div>

            {/* <section className="h-screen w-screen bg-teal-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden"> */}
            {/* <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 "> */}
            <nav className="border-b border-indigo-300 bg-white  px-7 py-4 flex items-center min-w-0 h-17">
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
                <img className="hvr-pulse" src={play} alt="logo" />
              </Link>
              <div className="wide-divider"></div>
              <Link to="/sidewalk">
                <img className="hvr-pulse" src={sidewalk} alt="sidewalklogo" />
              </Link>
              {/* <button className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <i className="fas fa-user fill-current"></i>
                  </button> */}
            </nav>

            <div className="flex">
              <div className="max-w-sm m-4 float-left">
                <div className="bg-white shadow-xl rounded-lg py-3">
                  <div className="photo-wrapper p-2">
                    <img
                      className="rounded-full mx-auto"
                      src={characterPic}
                      alt="user"
                    />
                  </div>

                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                      Hello,
                    </h3>
                    <div className="text-center text-pink-400 text-s font-semibold">
                      <h4>{localStorage.getItem("user")}!</h4>
                    </div>
                    {/* <table className="text-xs my-3">
                    <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">username</td>
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
                      <div className=" box-border lg:box-content h-480 w-480 p-6 border-4 bg-green-100 bg-opacity-50 shadow">
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
                            className="sm-bttn "
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

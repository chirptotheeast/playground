import React, { Component } from 'react'
import sidewalk from "../images/sidewalk.png";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import playlogo from "../images/sunnyplay.png";
import myplay from "../images/bigmyplayground.png";
import bee from '../images/bee.PNG'

// import Like from "../components/Like.js"

export default class Thesidewalk extends Component {
  
  likeHandler = (drawingid) => {
    //console.log(drawingsvgdrawing)
    const currentUser = localStorage.getItem("userId");
    const userId = parseInt(currentUser, 10);
   const drawCode = localStorage.getItem('favDrawingStr')

   
    


    let data = {
      user_id: userId,
      drawing_id: drawingid,
      drawing: drawCode
    };
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    };

    fetch("http://localhost:3000/favorite_drawings", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
 
   
    const characterPic = localStorage.getItem("character");

    return (
      <div>
        <div className="bannerFondo">
          <div className="float-right">
            <Link to="/myplayground">
              <img
                className="rounded-full m-4 hvr-pulse"
                src={characterPic}
                alt="user"
              />
            </Link>
          </div>
        </div>

        <div className="-mt-64 ">
          <div className="w-full text-center">
            <h1 className="font-bold text-5xl text-white">
              <img className="playlogo" src={sidewalk} alt="logo" />
            </h1>
          </div>
        </div>

        <nav className="border-b border-indigo-300 bg-white px-7 py-4 flex items-center min-w-0 h-17">
          <h1 className="font-semibold text-lg"></h1>

          <Link to="/playground">
            <img className="hvr-pulse" src={playlogo} alt="logo" />
          </Link>
          <div className="wide-divider"></div>
          <Link to="/myplayground">
            <img className=" hvr-pulse" src={myplay} alt="myplay" />
          </Link>
        </nav>
        <center>
          <div className="container items-center pt-20">
            <div className="bg-white w-1/2 flex items-center p-2 rounded-xl shadow border-double border-8 border-yellow-300">
              <div className="flex items-center "></div>
              <div className="flex-grow p-2">
                <div className="pageheading">
                  click on drawing to add to favorites
                  <img
                    src={bee}
                    alt="My profile"
                    className="w-16 h-16  hvr-buzz"
                  />
                </div>
              </div>
            </div>
          </div>
        </center>

        <div className="grid grid-cols-3 gap-4 place-content-center -m-4">
          {this.props.drawings.map((drawing) => {
            return (
              <div className="flex-container ">
                {/* {console.log(drawing.id)} */}
                <div
                  className="box-border lg:box-content h-480 w-480 p-6 border-4 bg-green-100 bg-opacity-50 shadow "
                  onClick={() => {
                    // const findId = drawingIdArr.find((drawId) => {
                    //   return drawId === drawing.Id;
                    // });
                    // console.log(findId)
                    localStorage.setItem("favDrawingStr", drawing.svgdrawing);
                    {
                      this.likeHandler(drawing.id);
                    }
                  }}
                >
                  <CanvasDraw
                    className="shadow"
                    disabled
                    hideGrid
                    ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
                    saveData={drawing.svgdrawing}
                    key={drawing.id}
                  />

                  {/* <Like drawings={this.props.drawings} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

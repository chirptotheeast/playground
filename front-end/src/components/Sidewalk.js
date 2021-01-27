import React, { Component } from 'react'
import sidewalk from "../images/sidewalk.png";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import play from "../images/lgplaygroundlogo.png";
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
 
       const drawingIdArr =  this.props.drawings.map((drawing) => {
        return drawing.id;
      })
      //console.log(drawingIdArr)

    // const findId = drawingIdArr.find((drawId) =>{
    //   return drawId === drawing.Id
    // })
    const characterPic = localStorage.getItem("character");

    return (
      <div>
        <div
          className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x"
          style={{ backgroundImage: `url(./img/bear-avatar.png)` }}
        >
          <div className="float-right">
            <img
              className="rounded-full m-4 hvr-pulse"
              src={characterPic}
              alt="user"
            />
          </div>
        </div>

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
        <nav className="border-b border-indigo-300 bg-white px-7 py-4 flex items-center min-w-0 h-17">
          <h1 className="font-semibold text-lg"></h1>

          <Link to="/playground">
            <img className="hvr-pulse" src={play} alt="logo" />
          </Link>
          <div className="wide-divider"></div>
        </nav>

        <div className="grid grid-cols-3 gap-4 place-content-center">
          {this.props.drawings.map((drawing) => {

            return (
              <div className="flex-container ">
                {/* {console.log(drawing.id)} */}
                <div
                  className="container-images"
                  onClick={() => {
                    // const findId = drawingIdArr.find((drawId) => {
                    //   return drawId === drawing.Id;
                    // });
                    // console.log(findId)
                   localStorage.setItem('favDrawingStr', drawing.svgdrawing)
                    {
                      this.likeHandler(drawing.id)
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

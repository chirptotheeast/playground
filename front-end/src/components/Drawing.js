import React, { Component } from "react";
import classNames from "../drawing.css";
import { Link } from "react-router-dom";
import playlogo from "../images/lgplaygroundlogo.png";

import CanvasDraw from "react-canvas-draw";

class Drawing extends Component {
   
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12,
  };

  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 2000);
  }

submitHandler =(event) => {

  const savedDraw = localStorage.getItem("savedDrawing");

            let data = {
             svgdrawing: savedDraw
            };

            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({data}),
            };
            fetch("http://localhost:3000/drawings", requestOptions)
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                this.saveableCanvas.clear();
              }
                );

}

  render() {
      
    return (
      <div>
        <div className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x"></div>
        <div className="-mt-64 ">
          <div className="w-full text-center">
            <h1 className="font-bold text-5xl text-white">
              <Link to="/playground">
                <img className="playlogo" src={playlogo} alt="logo" />
              </Link>
          
              drawing!
            </h1>
          </div>
        </div>
        <div>
          <div className="flex-container">
              <div className="drawing-container">
    
            {/* <p>
              This part got me most excited. Very easy to use saving and loading
              of drawings. It even comes with a customizable loading speed to
              control whether your drawing should load instantly (loadTimeOffset
              = 0) or appear after some time (loadTimeOffset > 0){" "}
              <span>{`<CanvasDraw loadTimeOffset={10} />`}</span>
            </p>
            <p>Try it out! Draw something, hit "Save" and then "Load".</p> */}
            <div className={classNames.tools}>
              <button className= "bttn"
                onClick={() => {
                  localStorage.setItem(
                    "savedDrawing",
                    this.saveableCanvas.getSaveData()
                  );
                  this.submitHandler();
                }}
              >
                Save
              </button>
              <button className="bttn"
                onClick={() => {
                
                }}
              >
                Clear
              </button>
              <button className="bttn"
                onClick={() => {
                  this.saveableCanvas.undo();
                }}
              >
                Undo
              </button>

              <div>
                <label>Brush-size:</label>
                <input
                  type="number"
                  value={this.state.brushRadius}
                  onChange={(e) =>
                    this.setState({ brushRadius: parseInt(e.target.value, 10) })
                  }
                />
              </div>
            </div>
            <div>
              Current color:{" "}
              <div
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  backgroundColor: this.state.color,
                  border: "1px solid #272727",
                }}
              />
            </div>
            <CanvasDraw
              loadTimeOffset={0}
              hideInterface
              hideGrid
              ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
              brushColor={this.state.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={this.state.lazyRadius}
              canvasWidth={this.state.width}
              canvasHeight={this.state.height}
            />
          
            <button className="bttn"
              onClick={() => { 
                this.loadableCanvas.loadSaveData(
                localStorage.getItem("savedDrawing")
                );
              }}
            >
             replay my drawing
            </button>
            <CanvasDraw
              disabled
              hideGrid
              ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
              saveData={localStorage.getItem("savedDrawing")}
              
            />
            {/* <p>
            The saving / loading also takes different dimensions into account.
            Change the width / height, draw something and save it and then load
            it into the disabled canvas. It will load your previously saved
            masterpiece scaled to the current canvas dimensions.
          </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawing;

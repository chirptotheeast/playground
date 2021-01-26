import React, { Component } from 'react'
import heartempty from "../images/heart-empty.PNG";
import heartliked from "../images/heart-liked.PNG"

export default class Like extends Component {

    state = {
        liked: false
    }

    toggle = () => {
        let localLiked = this.state.liked;

        localLiked = !localLiked;
        this.setState({liked: localLiked })
    }
    

    likeHandler = (event) => {

        const currentUser = localStorage.getItem("userId");
        const userId = parseInt(currentUser, 10)

       const drawingId = localStorage.getItem("drawingId")

       let data = {
         user_id: userId,
         drawing_id: drawingId
       };

       const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ data }),
       };

       fetch("http://localhost:3000/favorite_drawings", requestOptions)
         .then((response) => response.json())
         .then((data) => console.log(data));

    }

    render() {

  //    const drawFind= this.props.drawings.map(drawing => {
  //          return drawing.id  
  //    })
  // console.log(drawFind);
        return (
          <div>
            <div className="container place-content-center">
              <center>
                <p>add to favorites</p>
                <button onClick={() =>   this.toggle()}>
                  {this.state.liked === false ? (
                    <img
                      className="m-3 place-content-center"
                      src={heartempty}
                      alt="heartemptylogo"
                    />
                  ) : (
                    <img className="m-3" src={heartliked} alt="heartlikelogo" />
                  )}
                  {/* { this.likeHandler()} */}
                </button>
              </center>
            </div>
          </div>
        );
    }
}

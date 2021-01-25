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
    

    likeHander = (event) => {

        const currentUser = localStorage.getItem("userId");
        const userId = parseInt(currentUser, 10)

       let data = {
         user_id: userId,
         activity_id: ''
       };

       const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ data }),
       };
       fetch("http://localhost:3000/favorite_activities", requestOptions)
         .then((response) => response.json())
         .then((data) => {
           console.log(data)
         });

    }
    render() {
        return (
          <div>
            <div className="container">
              <center>
                {/* <p>click to like</p> */}
                <button onClick={() => this.toggle()}>
                  {this.state.liked === false ? (
                    <img src={heartempty} alt="heartemptylogo" />
                  ) : (
                    <img src={heartliked} alt="heartlikelogo" />
                  )}
                </button>
              </center>
            </div>
          </div>
        );
    }
}

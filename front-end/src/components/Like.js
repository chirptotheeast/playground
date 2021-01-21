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

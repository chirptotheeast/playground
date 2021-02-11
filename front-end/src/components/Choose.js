import React, { Component } from 'react'
import logo from '../images/lgplaygroundlogo.png'
import { Link } from "react-router-dom";
import choose from '../images/choosecharacterborder.png'
import fox from '../images/fox-avatar.png'
import bee from '../images/bee-avatar.png'
import bear from '../images/bear-avatar.png'
import sheep from '../images/sheep-avatar.png'
import bunny from '../images/bunny-avatar.png'
import mermaid from '../images/mermaid-avatar.png'
import hedgie from '../images/hedgehog-avatar.png'
import cow from '../images/cow-avatar.png'


    const avatarArr = [fox, bee, bear, sheep, bunny, mermaid, hedgie, cow]

export default class Choose extends Component {

  state ={
    avatar: false
  }
  

  chooseAvatar = (event) => {

  // const chosenAvatar = localStorage.getItem("character");

  // let data = {
  //   avatar: chosenAvatar
  // };

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ data }),
  // };
  // fetch("http://localhost:3000/users", requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     //console.log(data)
  //   });

  }

    render() {
        return (
          <div>
            <div className="helpful-vert-align"></div>
            <div className="bg-yellow-100 border-b border-indigo-300 choosediv">
              <img className="playlogo" src={logo} alt="logo" />
              <div className="flex-container">
                {avatarArr.map((avatar, index ) => {
                  return (
                    <Link to="/playground" key={index}>
                      <button
                        className="focus:outline-none"
                        onClick={() => {
                          localStorage.setItem("character", avatar);
                          this.chooseAvatar();
                        }}
                      >
                        <img
                          className="playlogo avatarchoose hvr-grow-rotate "
                          src={avatar}
                          alt={avatar}
                        />
                      </button>
                    </Link>
                  );
                })}
              </div>
              <img
                className="playlogo imgnobr choose "
                src={choose}
                alt="logo"
              />
            </div>
          </div>
        );
    }
}

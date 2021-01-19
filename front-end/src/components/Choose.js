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

    render() {
        return (
          <div className="choosediv">
            <img className="playlogo" src={logo} alt="logo" />
            <div className="flex-container">
                {avatarArr.map((avatar) => {
                    return (
                        <Link to="/playground">
                <button>
                <img className="playlogo avatarchoose" src={avatar} alt={avatar}/>
              </button>
              </Link>
                    )
                })}
            
            </div>
            <img className="playlogo imgnobr choose" src={choose} alt="logo" />
          </div>
        );
    }
}
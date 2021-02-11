import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import heart from "../images/heart-avatar.PNG";
import sheep from "../images/sheep-avatar.png";
import bee from "../images/bee-avatar.png";
import hedgie from "../images/hedgehog-avatar.png"
import tissue from "../images/tissue-avatar.PNG"
import bunny from "../images/bunny-avatar-purple.PNG"


export default function Musicplayer (props) {

   // console.log(props)


   
    const [url, setUrl] = useState("https://youtu.be/xT2zOAZAWoM");

        return (
          <div>
            <div className="music-player">
              <button
                className="mp-button-space focus:outline-none hvr-grow "
                onClick={() => setUrl("https://youtu.be/nYKNeMqww-I")}
              >
                <img
                  src={"/static/media/heart-avatar.6682dcf4.PNG"}
                  alt="heartlogo"
                />
              </button>
              <button
                className="mp-button-space focus:outline-none hvr-grow "
                onClick={() => setUrl("https://youtu.be/xT2zOAZAWoM")}
              >
                <img src={sheep} alt="sheeplogo" />
              </button>
              <button
                className="mp-button-space focus:outline-none hvr-grow "
                onClick={() => setUrl("https://youtu.be/Z6zWxullnuA")}
              >
                <img src={bee} alt="beelogo" />
              </button>
              <button
                className="mp-button-space focus:outline-none hvr-grow "
                onClick={() => setUrl("https://youtu.be/1YNVnXEckHM")}
              >
                <img src={hedgie} alt="hedgelogo" />
              </button>
              <button
                className="mp-button-space focus:outline-none hvr-grow "
                onClick={() => setUrl("https://youtu.be/wdKQIhtclZc")}
              >
                <img src={tissue} alt="tissuelogo" />
              </button>
              <button
                className="mp-button-space focus:outline-none hvr-grow"
                onClick={() => setUrl("https://youtu.be/IWWjTl39sFo")}
              >
                <img src={bunny} alt="bunnylogo" />
              </button>
            </div>
            <div className="music-player-buttons">
              <ReactPlayer url={url} />
              <div className="divider"></div>
            </div>
          </div>
        );
}

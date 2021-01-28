import React, { Component } from 'react'
import playlogo from "../images/sunnyplay.png";
import drawicon from "../icons/playdrawicon.PNG";
import gameicon from "../icons/playgameicon.PNG";
import musicicon from "../icons/playmusicicon.PNG";
import myplay from "../images/bigmyplayground.png";
import { Link } from "react-router-dom";
import sidewalk from "../images/sidewalk.png"
import fairy from "../sounds/fairy.mp3"
import artverbal from '../sounds/artvocal.mp3'
import snore from "../sounds/snore.mp3"
import zipvocal from "../sounds/zipvocal.mp3"
import gamesverbal from "../sounds/gamesaudio.mp3";
import drawverbal from "../sounds/drawaudio.mp3";
import sleepyicon from '../icons/sleepyicon.png'
import puppeticon from '../icons/sockpuppet.png'
import articon from '../icons/playsidewalkicon.PNG'
import bee from "../images/smbee.PNG"


class Playground extends Component {
  
  
   render(){
      const audio = new Audio(fairy);
      const gamesaudio = new Audio(gamesverbal)
      const drawaudio = new Audio(drawverbal)
      const zipaudio = new Audio(zipvocal)
      const snoreaudio = new Audio(snore)
      const artaudio = new Audio(artverbal)

      const start = () => {
        audio.play();
      };

        const gamestart = () => {
          gamesaudio.play();
        };

          const drawstart = () => {
            drawaudio.play();
          };

           const artstart = () => {
             artaudio.play();
           };

            const zipstart = () => {
              zipaudio.play();
            };

             const snorestart = () => {
               snoreaudio.play();
             };
      const characterPic = localStorage.getItem("character");

        return (
          <div>
            <div className="bannerFondo ">
              <div className="float-right">
                <Link to="/myplayground">
                  <img
                    className="rounded-full m-4 hvr-pulse"
                    src={characterPic}
                    alt="user"
                  />
                </Link>
              </div>
              <div></div>
              <div>
                <div className="float-right">
                  <Link to="/">
                    <img src={bee} className="hvr-buzz" onMouseOver={start} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mt-64 ">
              <center>
                <div className="w-full text-center">
                  <h1 className="font-bold text-5xl text-white">
                    <img className="playlogo" src={playlogo} alt="logo" />
                  </h1>
                </div>
              </center>
            </div>

            <nav className="border-b border-indigo-300 bannerFondo px-6 py-4 flex items-center min-w-0 h-1/2">
              <div className="moveright"></div>
              <h1 className="font-semibold text-lg"></h1>
              <Link to="/myplayground">
                <img
                  className="playlogo hvr-pulse w-3/4 h-3/4"
                  src={myplay}
                  alt="logo"
                />
              </Link>
              <div className="wide-divider"></div>
              <Link to="/sidewalk">
                <img
                  className="hvr-pulse "
                  src={sidewalk}
                  alt="logo"
                  style={{ float: "right" }}
                />
              </Link>
            </nav>
            <div className="smdivider"></div>
            <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
              <div className="md:grid md:h-32 md:grid-flow-row md:gap-14 md:grid-cols-3">
                <div
                  id="jh-stats-positive"
                  className="flex flex-col justify-center px-8 py-8 bg-white border border-gray-300 rounded shadow-lg hvr-grow-rotate  "
                >
                  <Link to="/music">
                    <div>
                      <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor-pointer ">
                        music
                      </p>

                      <img
                        onMouseOver={start}
                        className="playlogo imgnobr hvr-buzz pt-4  "
                        src={musicicon}
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-negative"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-purple-300 border border-gray-300 rounded sm:mt-0 shadow-lg hvr-grow-rotate "
                >
                  <Link to="/drawing">
                    <div>
                      <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor-pointer">
                        draw
                      </p>
                      <img
                        className="playlogo pt-4"
                        src={drawicon}
                        alt="logo"
                        onMouseOver={drawstart}
                      />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-neutral"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0 shadow-lg hvr-grow-rotate "
                >
                  <Link to="/games">
                    <div>
                      <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor pointer">
                        games
                      </p>
                      <img
                        onMouseOver={gamestart}
                        className="playlogo hvr-buzz pt-4"
                        src={gameicon}
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-positive"
                  className="flex flex-col justify-center px-8 py-8 bg-purple-300 border-gray-300 rounded shadow-lg hvr-grow-rotate "
                >
                  <Link to="/napmusic">
                    <div>
                      <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor-pointer ">
                        sleepy
                      </p>

                      <img
                        onMouseOver={snorestart}
                        className="playlogo imgnobr hvr-buzz pt-9 "
                        src={sleepyicon}
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-negative"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0 shadow-lg hvr-grow-rotate "
                >
                  <Link to="/sidewalk">
                    <div>
                      <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor-pointer">
                        art
                      </p>
                      <img
                        className="playlogo"
                        src={articon}
                        alt="logo"
                        onClick={artstart}
                      />
                    </div>
                  </Link>
                </div>

                <div
                  id="jh-stats-neutral"
                  className="flex flex-col justify-center px-4 py-4 mt-4 bg-purple-300 border border-gray-300 rounded sm:mt-0 shadow-lg hvr-grow-rotate "
                >
                  <Link to="/puppetshow">
                    <div>
                      <p className="p-play text-3xl font-semibold text-center text-gray-800 cursor pointer">
                        puppets
                      </p>
                      <center>
                        <img
                          onClickr={zipstart}
                          className="playlogo hvr-buzz "
                          src={puppeticon}
                          alt="puppetlogo"
                        />
                      </center>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="divider"></div>
          </div>
        );
                }
}

export default Playground
import React, { Component } from 'react'
import floortom from '../drumsounds/Floor-Tom-Drum4A.mp3'
import HiHatclosed from '../drumsounds/Hi-Hat-Closed.mp3'
import HiHatopen from '../drumsounds/Hi-Hat-OpenC2.mp3'
import Snarelow from '../drumsounds/Snare-Drum-Hit5b.mp3'
import Snarehigh from '../drumsounds/Snare-Drum-Hit6b.mp3'
import cowbell from '../drumsounds/cowbell.mp3'
import triangle from '../drumsounds/triangle.mp3'
import drumachinelogo from '../images/thedrummachine.png'
import noise from '../images/tealsingleand.png'

export default class DrumMachine extends Component {
    render() {
         const floortomy = new Audio(floortom);
        const hihatclosed = new Audio(HiHatclosed);
        const hithatopen = new Audio(HiHatopen);
        const snarelow = new Audio(Snarelow);
        const snarehigh = new Audio(Snarehigh);
        const cowbelly = new Audio(cowbell)
        const trianglely = new Audio(triangle)

         const start = () => {
           floortomy.play();
         };

         const hihatClosed = () => {
           hihatclosed.play();
         };

         const hihatOpen = () => {
             hithatopen.play()
         }

         const snareLow = () => {
           snarelow.play();
         };
         
         const snareHigh = () => {
             snarehigh.play()
         }

         const cowbellSound = () => {
           cowbelly.play()
         }

         const triangleSound = () =>{
           trianglely.play()
         }


        return (
          <div>
            <div>
              {/* <!-- animation --> */}
              <section className="flex flex-wrap items-center justify-around min-h-screen p-10 bg-pink-400 md:flex-row sm:flex-col">
                <center>
                  <img src={drumachinelogo} alt="drummachinelogo" />{" "}
                <img src={noise} alt="noiselogo"/>
                </center>
                {/* <!-- scale --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 transform hover:scale-75">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={start}
                    >
                      Tom
                    </div>
                  </div>
                </div>

                {/* <!-- roatate and scale --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 transform hover:rotate-90 hover:scale-75">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={hihatClosed}
                    >
                      Hi hat1
                    </div>
                  </div>
                </div>

                {/* <!-- rotate --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 transform hover:rotate-45">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={hihatOpen}
                    >
                      Hi hat2
                    </div>
                  </div>
                </div>

                {/* <!-- rotate minus --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 transform hover:-rotate-45">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={snareLow}
                    >
                      snare 1
                    </div>
                  </div>
                </div>

                {/* <!-- Origin --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 origin-left transform hover:-rotate-45">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={snareHigh}
                    >
                      snare 2
                    </div>
                  </div>
                </div>

                {/* <!-- scale --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 transform hover:scale-75">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={cowbellSound}
                    >
                      cow bell
                    </div>
                  </div>
                </div>

               
                {/* <!-- scale --> */}
                <div className="relative w-32 h-32 mb-5 cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-25"></div>
                  <div className="absolute inset-0 transition duration-300 transform hover:scale-75">
                    <div
                      className="w-full h-full bg-white rounded-lg shadow-2xl lg-bttn"
                      onClick={triangleSound}
                    >
                      tri- angle
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
    }
}

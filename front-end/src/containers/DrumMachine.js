import React, { Component } from 'react'
import floortom from '../drumsounds/Floor-Tom-Drum4A.mp3'
import HiHatclosed from '../drumsounds/Hi-Hat-Closed.mp3'
import HiHatopen from '../drumsounds/Hi-Hat-OpenC2.mp3'
import Snarelow from '../drumsounds/Snare-Drum-Hit5b.mp3'
import Snarehigh from '../drumsounds/Snare-Drum-Hit6b.mp3'

export default class DrumMachine extends Component {
    render() {
         const floortomy = new Audio(floortom);
        const hihatclosed = new Audio(HiHatclosed);
        const hithatopen = new Audio(HiHatopen);
        const snarelow = new Audio(Snarelow);
        const snarehigh = new Audio(Snarehigh);

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


        return (
          <div>
            <div>
              <h1>Drum Machine</h1>
              <div>
                <div className="divider"></div>
                <button className="bttn shadow" onClick={start}>
                  Tom
                </button>
                <button className="bttn shadow" onClick={hihatClosed}>
                  hi-hat 1
                </button>
                <button className="bttn shadow" onClick={hihatOpen}>
                  hi-hat 2
                </button>
                <button className="bttn shadow" onClick={snareLow}>
                  snare 1
                </button>
                <button className="bttn shadow" onClick={snareHigh}>
                  snare 2
                </button>
              </div>
            </div>
          </div>
        );
    }
}

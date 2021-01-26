 
 import React, { Component } from "react";

 import fairy from "../sounds/fairy.mp3";

 class ButtonAudioPlayer extends Component {
   constructor(props) {
     super(props);
     this.state = {};
   }

   componentDidMount() {
     // we add the even listener to buttons

     this.props.buttonsSelectors.forEach((selector) => {
       var button1 = document.querySelector(selector);
       button1.addEventListener("mouseenter", () => {
         this.sound("play");
       });
       button1.addEventListener("mouseleave", () => {
         this.sound("stop");
       });
     });
   }

   sound = (value) => {
     const track = document.getElementById("audio");
     if (value === "play") {
       track.load();
       track.play();
     } else {
       track.pause();
     }
   };

   render() {
     return (
       <audio id="audio">
         <source src={fairy} type="audio/mp3" />
       </audio>
     );
   }
 }
export default ButtonAudioPlayer;
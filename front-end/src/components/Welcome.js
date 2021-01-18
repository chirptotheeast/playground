import React, { Component } from 'react'
import logo from '../images/welcomeplaygroundlogo.png'
import { Link } from "react-router-dom";


export default class Welcome extends Component {
    render() {
        return (
          <div className="flex-container">
            <div className="rcorners1">
              <div className="inner-div">
                <img className="welcomelogo" src={logo} alt="logo" />
              </div>
              <div className="divider"></div>
              <Link to="/choose">
                <button className="button">let's play!</button>
              </Link>
              <Link to="/login">
                <button className="button">login</button>
              </Link>
            </div>
          </div>
        );
    }
}





//   <div className="bg-gray-600 flex justify-center items-center h-screen">
//         //     <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
//         //       <div className="flex flex-col justify center items-center">
//         //         <div className="bg-green-600 ">1</div>
//         //         <div className="bg-blue-700 ">2</div>
//         //         <div className="bg-red-700  ">3</div>
//         //       </div>
//         //     </div>
//         //   </div>

//   <div className="p-10 min-h-screen flex items-center justify-center bg-cool-gray-700">
//                 <div className="w-96 h-56 bg-indigo-500 rounded-lg shadow-2x1 overflow-hidden">
//                     <div className="h-full w-full bg-gradient-to-tl from-teal-500 via-blue-500 to-green-300">
//                     </div>
//                  </div>
//             </div>
import React, { Component } from 'react'
import logo from '../images/welcomeplaygroundlogo.png'
import { Link } from "react-router-dom";


export default class Welcome extends Component {
    render() {
        return (
          <div className="flex-container">
            <div className="rcorners1">
              <div className="inner-div">
                <img
                  className="welcomelogo hvr-wobble-vertical"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="divider"></div>
              <Link to="/choose">
                <button className="btn hvr-pulse focus:outline-none">
                  let's play!
                </button>
              </Link>
              <Link to="/login">
                <button className="btn hvr-pulse focus:outline-none">
                  login
                </button>
              </Link>
              <Link to="/register">
                <p className="createaccount p-play">create account</p>
              </Link>
            </div>
          </div>
        );
    }
}





//   <div className="flex items-center justify-center h-screen bg-gray-600">
//         //     <div className="flex flex-col w-2/3 overflow-hidden bg-white rounded-lg shadow-lg">
//         //       <div className="flex flex-col items-center justify center">
//         //         <div className="bg-green-600 ">1</div>
//         //         <div className="bg-blue-700 ">2</div>
//         //         <div className="bg-red-700 ">3</div>
//         //       </div>
//         //     </div>
//         //   </div>

//   <div className="flex items-center justify-center min-h-screen p-10 bg-cool-gray-700">
//                 <div className="h-56 overflow-hidden bg-indigo-500 rounded-lg w-96 shadow-2x1">
//                     <div className="w-full h-full bg-gradient-to-tl from-teal-500 via-blue-500 to-green-300">
//                     </div>
//                  </div>
//             </div>
import React, { Component } from 'react'
import myplaylogo from '../images/myplayground.png'
import home from "../images/home.png"
import sidewalk from "../images/sidewalk.png"
import { Link } from "react-router-dom";
import play from "../images/lgplaygroundlogo.png"

export default class Myplayground extends Component {
    render() {
        return (
          <div>
            <div
              className="bannerFondo bg-yellow-100 bg-left-top bg-auto bg-repeat-x"
              style={{ backgroundImage: `url(./img/bear-avatar.png)` }}
            ></div>
            <div className="-mt-64 ">
              <div className="w-full text-center">
                <h1 className="font-bold text-5xl text-white">
                  <img className="playlogo" src={myplaylogo} alt="logo" />
                  <div className="smdivider"></div>
                  <img className="playlogo" src={home} alt="logo" />
                </h1>
              </div>
            </div>
    

            <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
              {/* <aside className="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
                <ul className="text-center flex flex-row sm:flex-col w-full">
                  <li className="h-14 border-b border-gray-900 hidden sm:block">
                    <a
                      id="page-icon"
                      href="/"
                      className="h-full w-full hover:bg-gray-700 block p-3"
                    ></a>
                  </li>
                  <li
                    className="sm:border-b border-gray-900 flex-1 sm:w-full"
                    title="Inbox"
                  >
                    <a
                      id="page-icon"
                      href="/"
                      className="h-full w-full hover:bg-gray-700 block p-3"
                    >
                      <i className="fas fa-inbox fill-current"> </i>
                    </a>
                  </li>
                  <li
                    className="sm:border-b border-gray-900 flex-1 sm:w-full"
                    title="Settings"
                  >
                    <a
                      id="page-icon"
                      href="/"
                      className="h-full w-full hover:bg-gray-700 block p-3"
                    >
                      <i className="fas fa-cogs fill-current"> </i>
                    </a>
                  </li>
                  <li
                    className="sm:border-b border-gray-900 flex-1 sm:w-full"
                    title="Users"
                  >
                    <a
                      id="page-icon"
                      href="/"
                      className="h-full  w-full hover:bg-gray-700 block p-3"
                    >
                      <i className="fas fa-users fill-current"> </i>
                    </a>
                  </li>
                </ul>
              </aside> */}
              <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                <nav className="border-b bg-white px-7 py-4 flex items-center min-w-0 h-17">
                  <h1 className="font-semibold text-lg"></h1>
                  {/* <span className="flex-1"></span>
                  <span className="mr-2"> */}
                  {/* <input
                      type="text"
                      placeholder="Search"
                      className="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
                    /> */}
                  {/* </span> */}
                  <img src={play} alt="logo" />
                  <div className="wide-divider"></div>
                  <img src={sidewalk} alt="sidewalklogo" />
                  {/* <button className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <i className="fas fa-user fill-current"></i>
                  </button> */}
                </nav>
                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0 bg-green">
                  <div className="flex flex-col lg:flex-row h-full w-full">
                    <div className="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
                      {/* <!-- control content left --> */}
                      <div className="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div>
                      <div className="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div>
                    </div>

                    <div className="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
                      {/* <!-- overflow content right --> */}
                      <div className="bg-green-200 w-full h-full min-h-0 min-w-0 overflow-auto">
                        <div className="bg-pink-600 w-screen h-64"></div>
                        <div className="bg-blue-600 w-full h-64"></div>
                        <div className="bg-purple-600 w-screen h-64"></div>
                        <div className="bg-red-600 w-full h-64"></div>
                        <div className="bg-yellow-600 w-screen h-64"></div>
                        <div className="bg-green-600 w-full h-64"></div>
                      </div>
                    </div>
                  </div>
                </section>
                <footer className="px-6 py-3 border-t flex w-full items-end">
                  <div className="flex-1"></div>
                  <button className="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <i className="fas fa-question fill-current"></i>
                  </button>
                </footer>
              </main>
            </section>
          </div>
        );
    }
}

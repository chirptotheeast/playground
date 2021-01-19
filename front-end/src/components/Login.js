import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class Login extends Component {


  render() {
 
    return (
      <div>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Login</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="username"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <Link to="/choose">
              <button type="submit" className="btn-center">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Registration extends Component {

    
    render() {
        return (
          <div>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Register</h1>
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
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
                <Link to="/choose" >
                <button type="submit" className="btn">
                  Create Account
                </button>
                </Link>
              </div>

              <div className="text-grey-dark mt-6">
                Already have an account?
                <Link to="/login">
                  <a className="no-underline border-b border-blue text-blue">
                    Log in
                  </a>
                </Link>
                .
              </div>
            </div>
          </div>
        );
    }
}

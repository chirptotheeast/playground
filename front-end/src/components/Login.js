import React, { Component } from 'react'
import { Redirect } from "react-router-dom";




export default class Login extends Component {
 
  state = {
    username: "",
    password: "",
    loggedin: false
  }

 submitHandler = (event) =>{
  event.preventDefault()


            let data = {
              username: this.state.username,
              password: this.state.password
            };

            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            };
            fetch("http://localhost:3000/login", requestOptions)
              .then((response) => response.json())
              .then((data) => {localStorage.setItem('user', data.username) 
              localStorage.setItem('userId', data.id )
              this.setState({loggedin: !this.state.loggedin})
            });
     
          }


  render() {
    return (
      <div >
        {!this.state.loggedin ? (
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Login</h1>
              <form onSubmit={(event) => this.submitHandler(event)}>
                <input
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                  value={this.state.username}
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="username"
                  placeholder="username"
                />

                <input
                  value={this.state.password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />

                <button type="submit" className="btn-center">
                  Login
                </button>
              </form>
            </div>
          </div>
        ) : (
          <Redirect to="/choose" />
        )}
      </div>
    );
  }
}

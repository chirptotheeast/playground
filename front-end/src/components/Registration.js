import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Registration extends Component {
  state = {
    username: "",
    password: "",
    password_confirmation: "",
    errors: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, password_confirmation } = this.state;
    let user = {
      username: username,
      password: password,
      password_confirmation: password_confirmation,
    };

    axios
      .post("/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleLogin(response.data);
          this.props.history.push("/choose");
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  
  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { username, password, password_confirmation } = this.state;
    return (
      <div>
        <div className="helpful-vert-align"></div>
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                value={username}
                type="text"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />

              <input
                value={password}
                type="password"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
              <input
                value={password_confirmation}
                type="password"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="password_confirmation"
                placeholder="password confirmation"
                onChange={this.handleChange}
              />
              <button
                type="submit"
                placeholder="submit"
                className="btn focus:outline-none"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="mt-6 text-grey-dark">
            <p>Already have an account?</p>
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

import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: "",
    avatar: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    let user = {
      username: username,
      password: password,
    };

    axios
      .post("/login", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data);
             this.props.history.push("/choose"); // this is the redirect after login submit
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
    const { username, password } = this.state;
    return (
      <div>
        <div className="helpful-vert-align"></div>
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                value={username}
                type="text"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="username"
                placeholder="username"
              />

              <input
                value={password}
                onChange={this.handleChange}
                type="password"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="password"
                placeholder="password"
              />

              <button
                type="submit"
                className="btn focus:outline-none"
                placeholder="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

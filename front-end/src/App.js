import Welcome from "./components/Welcome.js";
import "./App.css";
import "./assets/output.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Choose from "./components/Choose.js";
import Playground from "./components/Playground.js";
import Myplayground from "./components/Myplayground.js";
import Login from "./components/Login.js";

import React, { Component } from "react";
import axios from "axios";

import Register from "./components/Registration.js";
import Music from "./components/Music.js";
import Drawing from "./components/Drawing.js";
import Games from "./components/Games.js";
import Sidewalk from "./components/Sidewalk.js";
import NapMusic from "./components/NapMusicPlayer.js";
import PuppetShow from "./components/PuppetShow.js";



class App extends Component {
  state = {
    isLoggedIn: false,
    user: {},
  };

  async componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    axios
      .get("/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };

  handleLogout = () => {
    console.log("hello");
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <header className="App-header">
              <Route exact path="/" component={Welcome} />
              <Route exact path="/choose" component={Choose} />
              <Route exact path="/playground">
                <Playground
                  handleLogout={this.handleLogout}
                />
              </Route>
              <Route exact path="/myplayground" component={Myplayground}>
                <Myplayground
                  updateDraw={this.updateDraw}
                  user={this.state.user}
                />
              </Route>
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <Login handleLogin={this.handleLogin} {...routeProps} />
                )}
              />

              <Route
                exact
                path="/register"
                render={(routeProps) => (
                  <Register handleLogin={this.handleLogin} {...routeProps} />
                )}
              />

              <Route exact path="/music" component={Music}>
                <Music activities={this.state.activities} />
              </Route>
              <Route exact path="/drawing" component={Drawing} />
              <Route exact path="/games" component={Games} />
              <Route exact path="/sidewalk" component={Sidewalk}>
                <Sidewalk
                  user={this.state.user}
                />
              </Route>
              <Route exact path="/napmusic" component={NapMusic} />
              <Route exact path="/puppetshow" component={PuppetShow} />
            </header>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

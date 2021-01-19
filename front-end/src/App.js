import Welcome from "./components/Welcome.js"
import './App.css';
import "./assets/output.css";
import { Route } from "react-router-dom";
import wand from "./images/cursorwand.png"
import Choose from "./components/Choose.js"
import Playground from './components/Playground.js'
import Login from "./components/Login.js"
import React, {Component} from "react"
import Register from "./components/Registration.js"
import NewPlay from "./components/NewPlay.js"

class App extends Component {
  render(){

    const appstyle = {
      cursor: `url(${wand})`
    }
  return (
    <div className="App">
      <div style={appstyle}>
        <header className="App-header">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/choose" component={Choose} />
          <Route exact path="/playground" component={Playground}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/newplay" component={NewPlay} />
        </header>
      </div>
    </div>
  );
  }
}

export default App;

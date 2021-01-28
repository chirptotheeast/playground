import Welcome from "./components/Welcome.js"
import './App.css';
import "./assets/output.css";
import { Route } from "react-router-dom";
import Choose from "./components/Choose.js"
import Playground from './components/Playground.js'
import Myplayground from './components/Myplayground.js'
import Login from "./components/Login.js"
import React, {Component} from "react"
import Register from "./components/Registration.js"
import Music from "./components/Music.js"
import Drawing from "./components/Drawing.js"
import Games from "./components/Games.js"
import Sidewalk from "./components/Sidewalk.js"
import NapMusic from './components/NapMusicPlayer.js'
import PuppetShow from './components/PuppetShow.js'


// const user ="http://localhost:3000/users/4"
const activities = "http://localhost:3000/activities";
const drawings = "http://localhost:3000/drawings";
const favdrawings = "http://localhost:3000/favorite_drawings";

class App extends Component {
  state = {
    user: [],
    favorite_activities: [],
    drawings: [],
    favorite_drawings: []
  }


  async componentDidMount(){
    const url = 'http://localhost:3000/users/' + localStorage.getItem('userId')
     const userResponse = await fetch(url);
    const userData = await userResponse.json();
    //console.log(userData);
    this.setState({ user: userData });

       const response = await fetch(activities);
       const activityData = await response.json();
       //console.log(activityData);
       this.setState({ activities: activityData });

           const drawResponse = await fetch(drawings);
           const drawData = await drawResponse.json();
           //console.log(userData);
           this.setState({ drawings: drawData});

                const favdrawResponse = await fetch(favdrawings);
                const favdrawData = await favdrawResponse.json();
                //console.log(favdrawData);
                this.setState({ favorite_drawings: favdrawData });
  }

updateDraw = (id) => {

  this.setState({
    favorite_drawings: this.state.favorite_drawings.filter(drawing => {
       return drawing.id !== id
  })
})
}




  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/choose" component={Choose} />
        <Route exact path="/playground">
          <Playground activities={this.state.activities} />
        </Route>
        <Route exact path="/myplayground" component={Myplayground}>
          <Myplayground
            drawings={this.state.drawings}
            favdrawings={this.state.favorite_drawings}
            updateDraw={this.updateDraw}
          />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/music" component={Music}>
          <Music activities={this.state.activities} />
        </Route>
        <Route exact path="/drawing" component={Drawing} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/sidewalk" component={Sidewalk}>
          <Sidewalk drawings={this.state.drawings} />
        </Route>
        <Route exact path="/napmusic" component={NapMusic} />
        <Route exact path="/puppetshow" component={PuppetShow} />
      </header>
    </div>
  );
  }
}

export default App;

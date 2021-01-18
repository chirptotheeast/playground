import Welcome from "./components/Welcome.js"
import './App.css';
import "./assets/output.css";
import { Route } from "react-router-dom";
import wand from "./images/cursorwand.png"
import Choose from "./components/Choose.js"
import Playground from './components/Playground.js'

function App() {
  return (
    <div className="App">
      <div style={{cursor: `url(${wand})` }}>
        <header className="App-header">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/choose" component={Choose} />
          <Route exact path="/playground" component={Playground}/>
        </header>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Basicmap from "./Basicmap";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/map">
            <div className="main">
              <div className="column">
                <Sidebar></Sidebar>
              </div>
              <div className="column">
                <Basicmap></Basicmap>
              </div>
            </div>
          </Route>
          <Route path="/help"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

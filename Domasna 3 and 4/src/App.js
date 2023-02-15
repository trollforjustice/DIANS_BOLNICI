import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Basicmap from "./Basicmap";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Help from "./Help";
function App() {
  const [lng, setLng] = useState(true);
  const changeLanguage = () => {
    setLng(!lng);
  };

  return (
    <Router>
      <div className="App">
        <Navbar lng={lng} changeLanguage={changeLanguage}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home lng={lng} ></Home>
          </Route>
          <Route path="/map">
            <div className="main">
              <div className="column">
                <Sidebar lng={lng} ></Sidebar>
              </div>
              <div className="column">
                <Basicmap lng={lng} ></Basicmap>
              </div>
            </div>
          </Route>
          <Route path="/help">
            <Help lng={lng} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

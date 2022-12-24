import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Basicmap from "./Basicmap";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
function App() {
  const [lng, setLng] = useState(false);
  const changeLanguage = () => {
    setLng(!lng);
  };

  return (
    <Router>
      <div className="App">
        <Navbar lng={lng} changeLanguage={changeLanguage}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home lng={lng} changeLanguage={changeLanguage}></Home>
          </Route>
          <Route path="/map">
            <div className="main">
              <div className="column">
                <Sidebar lng={lng} changeLanguage={changeLanguage}></Sidebar>
              </div>
              <div className="column">
                <Basicmap lng={lng} changeLanguage={changeLanguage}></Basicmap>
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

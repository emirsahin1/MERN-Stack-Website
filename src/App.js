import React from "react";
import Navbar from "./components/nav/nav-bar.jsx";
import Home from "./components/home/home.jsx";
import InformationPage from "./components/information/information";
import DownloadPage from "./components/download/download-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop  from "./components/utility-components/scroll-to-top";
import "./index.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="background"></div>
        <Navbar />
        <Switch>
          <Route path="/Download" component={DownloadPage} />
          <Route path="/Information" component={InformationPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//TODO Comment Finished Code
//TODO Make mobile button close after click

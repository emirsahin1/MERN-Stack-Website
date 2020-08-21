import React from "react";
import Navbar from "./components/nav/nav-bar.jsx";
import Home from "./components/pages/home/home.jsx";
import InformationPage from "./components/pages/information/information";
import DownloadPage from "./components/pages/download/download-page";
import Footer from "./components/footer/footer"
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//TODO Write Tests

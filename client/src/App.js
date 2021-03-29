import React from "react";
import Navbar from "./components/nav/nav-bar.jsx";
import Home from "./pages/home/home.jsx";
import InformationPage from "./pages/information/information";
import DownloadPage from "./pages/download/download-page";
import EducationPage from "./pages/education/education"
import DesignPage from "./pages/design/design"
import ArtPage from "./pages/art/art"
import TechnologyPage from "./pages/technology/technology"
import TherapyPage from "./pages/therapy/therapy"
import ComingSoon from "./pages/coming-soon/coming-soon"

import Footer from "./components/footer/footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop  from "./components/utility-components/scroll-to-top";
import ScrollToTopF from "./components/scroll-to-top/scroll-to-top";
import "./index.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="background"></div>
        <Navbar />
        <Switch>
          <Route path="/Download" component={ComingSoon} />
          <Route path="/Information" component={InformationPage} />
          <Route path="/Design" component={ComingSoon}/>
          <Route path="/Therapy" component={ComingSoon}/>
          <Route path="/Art" component={ComingSoon}/>
          <Route path="/Technology" component={ComingSoon}/>
          <Route path="/Education" component={ComingSoon}/>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <ScrollToTopF></ScrollToTopF> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//TODO Write Tests

import React from 'react';
import Navbar from './components/nav/nav-bar.jsx'
import Home from './components/home/home.jsx'
import "./index.css"

function App() {
  return (
    <div className="App">
    <div className="background"></div>
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;

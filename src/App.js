import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

const App = () => (
  <Router>
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/resume"><Resume /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/"><About /></Route>
      </Switch>
    </div>
  </Router>
);

export default App;

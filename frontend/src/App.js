import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GamesList from './components/GamesList';
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Header siteTitle="SSukSSuk Games" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games-list" component={GamesList} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

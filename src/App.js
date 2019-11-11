import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import LoginPage from "./pages";
import MentorPage from "./pages/mentors";
import LearningPage from "./pages/learning";
import ProfilePage from "./pages/profile"

class App extends Component {
  render() {
    return <Router>
    <Switch>
      <Route  exact path="/" component = {LoginPage} />
      <Route exact path="/mentors" component = {MentorPage} />
      <Route exact path="/learning" component = {LearningPage} />
      <Route exact path="/user" component = {ProfilePage} />
    </Switch>
    </Router>
  }
}

export default App;

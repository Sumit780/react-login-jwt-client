import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './component/header';
import Login from './component/login';
import User from './component/user';

function App() {
  return (
    <>
    <Header/>
    <Router>
    <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import Login from './login.js';
import DashBoard from './dashBoard.js';

const BasicRouting = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashBoard">About</Link>
        </li>
        
      </ul>

      <hr />

      <Route exact path="/" component={Login} />
      <Route path="/dashBoard" component={DashBoard} />
     
    </div>
  </Router>
);

export default BasicRouting;
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './LoginForm';

import App from './App';

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

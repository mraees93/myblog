import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import App from './App';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



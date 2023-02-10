import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Pages/Navbar";

import './Css/index.css';
import './Css/Navbar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
      <Navbar/>
  </BrowserRouter>, 
  document.getElementById('root')
)

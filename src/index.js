import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Homepage from './pages/homepage'
import ProjectIndex from './pages/projectIndex'
import NavBar from './components/nav_bar'
import Image from './components/image'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/projects' element={<ProjectIndex />} />
        
      
      </ Routes>
    </Router>
    <Image />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

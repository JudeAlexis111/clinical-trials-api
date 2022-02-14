import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import $ from 'jquery';
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Study from './study.js'
import Home from "./Home.js"

function App() {

  

  return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/study' element={<Study/>} />
    </Routes>
    </Router>
  );
}

export default App;

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

const containerStyle = {
  width: '400px',
  height: '400px'
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};

function App() {

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  console.log("hello")

  useEffect(() => {
    const studyList = []
    $.getJSON('https://api.jsonbin.io/b/620844571b38ee4b33b90eb8/2', function(data) {
      // JSON result in `data` variable
      console.log(data.studies);
      data.studies.forEach(populateList);
    });

    //console.log(studyList);

    function populateList(value) {
      console.log(value);

      var element = document.createElement("div");
      element.className = "grid-item";

      var image = document.createElement('img');
      image.className = "a";
      image.src = value.imageUrl;
      element.append(image);
    
      var title = document.createElement('h1');
      title.className = "c";
      title.innerText = value.name;
      element.appendChild(title);

      var date = document.createElement('h1');
      date.className = "f";
      var str = value.startDate + " - " + value.endDate;
      date.innerHTML = str.italics()
      element.appendChild(date);
  
      var state = document.createElement('h1');
      state.className = "e";
      state.innerText = value.locationCity + ", " + value.locationState;
      element.appendChild(state);
  
      var faci = document.createElement('h1');
      faci.className = "e";
      faci.innerText = value.locationFacility;
      element.appendChild(faci);

      var faci = document.createElement('h1');
      faci.className = "d";
      faci.innerText = "Description: " + value.briefDescription.replace(/(\r\n|\n|\r)/gm, "").substring(0,200) + "...";
      element.appendChild(faci);

      var button = document.createElement("button");
      button.className = "button";
      var btnTxt = document.createElement("a")
      btnTxt.innerText = "Read More";
      button.appendChild(btnTxt);
      element.appendChild(button);

      document.getElementById('lc').appendChild(element);
      
    }

  }, []);

  return (
    <div className="App">

    <Router>
      <Routes>
          <Route path='/study' element={<Study/>} />
      </Routes>
    </Router>

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My-Studies</Navbar.Brand>

        <Navbar.Brand href="#home">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="study">My Rewards</Nav.Link>
            <Nav.Link href="#link">My Data</Nav.Link>
            <Nav.Link href="#link">My Surveys</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Jude Alexis</a>
      </Navbar.Text>
    </Navbar.Collapse>

      </Container>
    </Navbar>

    <div className='bg-image'>
    <img class="b" src='/medical.jpeg' width="100%" height="600"/>
    <div class="centered">
      <h1 class="a">Discover</h1>
      
      <form class = "example"  action="/action_page.php"> 
        <input type="textOne" name="search" autocomplete="off" placeholder="Find a clinical study..."></input>
        <input type="textTwo" name="search" autocomplete="off" placeholder="Near Irvine, CA"></input>
        <button type="submit">Search</button>
      </form>
    </div>
    </div>

    {/*
    <LoadScript
        googleMapsApiKey="AIzaSyBgrtrEe8fveSLFTHYg5hphVlqQ0yqnJcs"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          zoom={15}
        >
          {
              <Marker
              icon={{
                fillColor: "yellow",
                strokeColor: "gold",
                scale: 7,
              }}
              position={center}
            />
          }
          <></>
        </GoogleMap>
      </LoadScript>

        */}
    <div class="a">
      <h1 class="b">Most Recent Studies</h1>
    </div>
    
    <div id="lc" class="grid-container">
    </div>


    </div>

    
  );
}

export default App;

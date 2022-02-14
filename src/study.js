
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


function Study(){

    useEffect(() => {
        // Update the document title using the browser API
        var str = window.location.href;
        var block;

        str = str.split("?").pop();
        console.log(str);

        $.getJSON('https://api.jsonbin.io/b/620844571b38ee4b33b90eb8/3', function(data) {
            // JSON result in `data` variable
            console.log(data.studies[parseInt(str)]);
            populatePage(data.studies[parseInt(str)]);
          });

          function populatePage(value){
            //var image = document.createElement('img');
            //image.className = "c";
            //image.src = value.imageUrl;

            document.getElementById('headerImg').src = value.imageUrl;
            document.getElementById('title').innerText = value.name;

            if(value.rating == 1){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
            } else if(value.rating == 2){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"

            } else if(value.rating == 3){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"
                document.getElementById('star3').className = "fa fa-star checked fa-1x"

            } else if(value.rating == 4){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"
                document.getElementById('star3').className = "fa fa-star checked fa-1x"
                document.getElementById('star4').className = "fa fa-star checked fa-1x"

            } else if(value.rating == 5){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"
                document.getElementById('star3').className = "fa fa-star checked fa-1x"
                document.getElementById('star4').className = "fa fa-star checked fa-1x"
                document.getElementById('star5').className = "fa fa-star checked fa-1x"

            }
          }

      });

  return (
    <div id="fillMe">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My-Studies</Navbar.Brand>

        <Navbar.Brand href="/">
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
    <img id="headerImg" class="b" src='/medical.jpeg' width="100%" height="600"/>
    <div class="bottom-left">
      <h1 id="title" class="g">Discover</h1>
        <div class="stars">
            <span id="star1" class="fa fa-star fa-1x"></span>
            <span id="star2" class="fa fa-star fa-1x"></span>
            <span id="star3" class="fa fa-star fa-1x"></span>
            <span id="star4" class="fa fa-star fa-1x"></span>
            <span id="star5" class="fa fa-star fa-1x"></span>
        </div>
    </div>
    </div>

    </div>
  );

};
  
export default Study;
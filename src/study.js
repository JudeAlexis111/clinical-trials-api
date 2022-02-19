
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import $ from 'jquery';
import { useEffect } from "react";

const containerStyle = {
    width: '530px',
    height: '400px'
  };
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true
  };

  const center = {
    lat: parseFloat(window.location.href.split("?").pop().split(",")[1]),
    lng: parseFloat(window.location.href.split("?").pop().split(",")[2])
  };

function Study(){

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const sendEmail = (() => {
    var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    setShow(false);
  });

    useEffect(() => {
        // Update the document title using the browser API
        var url = window.location.href;
        var str = "";
        var block;

        console.log(center);

        url = url.split("?").pop();
        str = url.split(",")[0];
        console.log(url.split(",")[1]);

        $.getJSON('https://api.jsonbin.io/b/620844571b38ee4b33b90eb8/5', function(data) {
            // JSON result in `data` variable
            console.log(data.studies[parseInt(str)]);
            populatePage(data.studies[parseInt(str)]);
          });

          function populatePage(value){
            //var image = document.createElement('img');
            //image.className = "c";
            //image.src = value.imageUrl;

            var map = document.getElementById('map');
            //map.innerHTML = map.innerHTML.replace(/-3.745,-38.523/g,'29.97,31.13');

            console.log(value.eligibility.minimumAge);
            localStorage.setItem("studyName", value.name);
            localStorage.setItem("criteria", value.eligibility.eligibilityCriteria);
            localStorage.setItem("url", value.detailedStudyInfoUrl);

            document.getElementById('headerImg').src = value.imageUrl;
            document.getElementById('age').innerText = value.eligibility.minimumAge;

            document.getElementById('gender').innerText = value.eligibility.gender;
            document.getElementById('intervention').innerText = value.interventions[0].InterventionName;
            document.getElementById('duration').innerText = value.startDate + " - " + value.endDate;
            document.getElementById('title').innerText = value.name;
            document.getElementById('reviews').innerText = value.noOfReviews;
            document.getElementById('description').innerText = value.briefDescription.replace(/(\r\n|\n|\r)/gm, "");

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
        <h1 id="reviews" class="reviewNum"> 123 reviews</h1>
    </div>
    </div>

<section>
  
  <article>

  <div class="row">
  <div class="column">
    <div class="card2">
      <p><i class="fa fa-calendar fa-1x"></i></p>
      <h3>Duration</h3>
      <p id="duration">Partners</p>
    </div>
  </div>

  <div class="column">
    <div class="card2">
      <p><i class="fa fa-child fa-1x"></i></p>
      <h3>Min. Age</h3>
      <p id="age">Projects</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card2">
      <p><i class="fa fa-venus-mars fa-1x"></i></p>
      <h3>Gender</h3>
      <p id="gender">Happy Clients</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card2">
      <p><i class="fa fa-file fa-1x"></i></p>
      <h3>Intervention</h3>
      <p id="intervention">Meetings</p>
    </div>
  </div>
</div>

  <div class="card3">
    <div class="container">
      <h4 class="indTitle"><b>Description</b></h4> 
      <p id="description">Architect Engineer</p> 
    </div>
  </div>

  <button onClick={handleShow} class="button button2">Intrested? Check Eligibility</button>

  <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email You Physician</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To: 
            <input type="text" id="fname" name="firstname" placeholder="Physician name"></input>
            at
            <input type="text" id="fname" name="firstname" placeholder="Physician email"></input>
          </p>

          <p>From: 
            <input type="text" id="fname" name="firstname" placeholder="Your name"></input>
            at
            <input type="text" id="fname" name="firstname" placeholder="Your email"></input>
          </p>

          <p>Subject: 
            <input type="text2" id="subjectName" name="firstname" value={localStorage.getItem("studyName")}></input>
          </p>
          
          <form>
          <textarea 
            value = {"I am interested in participating in " + localStorage.getItem("studyName")
            + ". " + localStorage.getItem("criteria") + "\n\nFor more info see: " 
            + localStorage.getItem("url")}>
          </textarea>
          </form>

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>

  </article>

  <div class="map">

    <LoadScript
        googleMapsApiKey="AIzaSyBgrtrEe8fveSLFTHYg5hphVlqQ0yqnJcs"
      >
          
        <GoogleMap id="map" class="map"
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          zoom={5}
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

      </div>

      <div class="card5">
      <div class="container">
        <p>8700 Beverly Blvd Los Angeles, CA 90048 <i class="fa fa-map fa-2x"></i></p>
      </div>
      </div>

      <div class="card5">
      <div class="container">
        <p>310-423-9666 <i class="fa fa-phone fa-3x"></i></p>
      </div>
      </div>

</section>

<div id="snackbar">Email Sent!</div>

    </div>
    
  );

};
  
export default Study;
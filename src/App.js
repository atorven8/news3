import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import Login from "./Login.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import app from './firebase';
import { useNavigate,useHistory } from 'react-router-dom';
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
function App() {

  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/">
            <Login />
          </Route>
          
       
        </Switch>

      </Router>

    </div>
  );
  }
export default App
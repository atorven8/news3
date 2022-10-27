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
import News from './News';
function App() {

  return (
    <div className="App">
        <Navbar/>
      <Router>

        <Switch>
        <Route path="/login">    
            <Login/>
           
          </Route>
        
          
          <Route exact path="/" component={News}  >
           
           
              <News key={"general"} pageSize={9} country="in" category="general" />
            </Route>
            <Route exact path="/Business">
              <News key={"business"} pageSize={9} country="in" category="business" />
            </Route>
            <Route exact path="/Science">
              <News key={"science"} pageSize={9} country="in" category="science" />
            </Route>
            <Route exact path="/Entertainment">
              <News key={"entertainment"} pageSize={9} country="in" category="entertainment" />
            </Route>
            <Route exact path="/Sports">
              <News key={"sports"} pageSize={9} country="in" category="sports" />
            </Route>
            <Route exact path="/Tech">
              <News key={"tech"} pageSize={9} country="in" category="technology" />
            </Route>
            <Route exact path="/Health">
              <News  key={"health"} pageSize={9} country="in" category="health" />
            </Route>
          
        </Switch>

      </Router>

    </div>
  );
  }
export default App
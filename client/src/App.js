import React, { Component } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import axios from "axios";

//Actions file importation
import * as Types from "./actions";

//Style importation
import "./App.css";

/* App components importation */
import Students from "./containers/Students";
import StudentDetails from "./containers/StudentDetails";
import StudentAddNew from "./containers/StudentAddNew";
import StudentUpdate from "./containers/StudentUpdate";
import ContactPage from "./containers/ContactPage";
import Gallery from "./components/GalleryRep";
import AboutUs from "./components/AboutUsRep";
import LoginPage from "./containers/LoginPage";
import UploadStudentPicture from "./components/UploadStudentPicture";

//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });

class App extends Component {
  constructor() {
    super();
  }

  render() {
    //const btn = <button onClick={()=>{this.props.logout(false)}}>Log out</button>;
    //const btn = <i class="fa fa-sign-out" onClick={()=>{this.props.logout(false)}}></i>;
    const hidden= this.props.isLoggedIn? "hidden":"";
    return (
      <div className="main-box">
        <header>Photos Gallery Application</header>
        {
          this.props.isLoggedIn ?
          (<i className="fa fa-sign-out logout" onClick={()=>{this.props.logout(false)}}></i>)
          :
          "" 
        }
        <Router>
          <div>
            <ul>
                <li><NavLink exact to="/">Students List</NavLink></li>
                <li><NavLink exact to="/contact">Contact Us</NavLink></li>
                <li><NavLink exact to="/about">About Us</NavLink></li>
                <li className="right-element">
                  <NavLink exact to="/studentAddNew"><i className="fa fa-plus-square-o"></i> New Student</NavLink>
                </li>
            </ul>

            <Switch>
             
              <Route exact path="/" render={props => <Students {...props} />} />

              <Route exact path="/studentDetails/:_id" render={props => <StudentDetails {...props} />} />
              
              <Route exact path="/studentUpdate/:_id" render={props => <StudentUpdate {...props} />} />

              <Route exact path="/studentAddNew" render={props => <StudentAddNew {...props} />}/>

              <Route exact path="/contact" render={props => <ContactPage {...props} />}/>

              <Route exact path="/gallery" render={props => <Gallery {...props} />}/>

              <Route exact path="/about" render={props => <AboutUs {...props} />}/>

              <Route exact path="/login" render={props => <LoginPage {...props} />}/>
              
              <Route exact path="/uploadFile/:_id/:firstName" render={props => <UploadStudentPicture {...props} />}/>

            </Switch>
            
          </div>
        </Router>

        <footer>Copyright 2018 &copy; Mouhssine Idrissi Akhelij</footer>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: payload =>dispatch(Types.actionCreator(Types.LOGOUT, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

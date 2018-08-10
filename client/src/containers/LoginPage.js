import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";


import * as Types from "../actions";

import LoginPageRep from "../components/LoginPageRep";


//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });

class LoginPage extends Component {

  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
    this.auth_Me = this.auth_Me.bind(this);
  }

  handleLogin (values) {
    // if (values.password=="mouhssine")
    // {
    //     this.props.login(true)
    //     alert('Login success...');
    // }
    // else{
    //     alert('Login fails!!!'); 
    // }
    this.auth_Me(values);
  }

  async auth_Me(values) {

    const res1 = await axios.post("/auth", values);

    const r1 = await res1.data.pass;
    console.log("rs1", r1);

    if(!r1) return alert('Error:Login access refused!!!');
    
    this.props.login(true);
    return alert('Login success...');
    

  }
  
  render() {
    return (
      <div className="App">

          <LoginPageRep
            {...this.props}
            onSubmit={values => {
              this.handleLogin(values);
            }}
          />

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
    login: payload =>dispatch(Types.actionCreator(Types.LOGIN, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
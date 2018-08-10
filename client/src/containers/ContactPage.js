import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import ContactPageRep from "../components/ContactPageRep";
import LoginPage from "../containers/LoginPage";


//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });

class ContactPage extends Component {
  constructor() {
    super();

    this.asynchronoseMessageSending = this.asynchronoseMessageSending.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    
  }

  sendMessage(values) {
    if (this.asynchronoseMessageSending(values))
      return alert("message sent succcessfully");
    alert("message sent fails!!!");
  }

  render() {
    
    return (
        <div>
          {this.props.isLoggedIn ? (
             <ContactPageRep
             {...this.props}
             onSubmit={values => {
               this.sendMessage(values);
             }}
           />
          ) : (
            <LoginPage  />
          )}
        </div>
    );
  }

  async asynchronoseMessageSending(values) {
    const res1 = await axios.post("/contact", values);
    const res2 = await res1.data.success;
    return res2;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};


export default connect(
  mapStateToProps
)(ContactPage);

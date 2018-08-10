import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import * as Types from "../actions";

import StudentsRep from "../components/StudentsRep";
import LoginPage from "../containers/LoginPage";

//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });
//const axiosInstance = axios.create({ baseURL: "/" });

class Students extends Component {

  constructor() {
    super();
    this.getItemsFromAPI = this.getItemsFromAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  handleClick(studentToDelete) {
    this.deleteStudent(studentToDelete);
  }
  
  render() {

    return (
      <div>
        {this.props.isLoggedIn ? (
          <StudentsRep students={this.props.students} handleClick={this.handleClick} />
        ) : (
          <LoginPage />
        )}
      </div>
    );
  }

  async getItemsFromAPI() {
    const res = await axios.get("/students");
    this.props.getData(res.data.myStudents);
  }

  async deleteStudent(studentToDelete) {
    const res1 = await axios.put("/deleteStudent", {
      _id: studentToDelete
    });
    const deletedStudent = await res1.data.deletedStudent;

    if(!deletedStudent) return alert("Error: student not deleted!!!");

    const res2 = await axios.get("/students");
    const r2 = await res2.data.myStudents;
    this.props.getData(r2);

    alert("Student deleted successfully...");
  }

  componentDidMount() {
    this.getItemsFromAPI();
  }
}
const mapStateToProps = state => {
  return {
    students: state.students,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: payload =>
      dispatch(Types.actionCreator(Types.GET_STUDENTS, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
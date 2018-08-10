import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as Types from "../actions";

import StudentAddNewRep from "../components/StudentAddNewRep";
import LoginPage from "../containers/LoginPage";



//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });

class StudentAddNew extends Component {
  constructor() {
    super();

    this.addStudentAndGetData = this.addStudentAndGetData.bind(this);
    this.addNewStudent = this.addNewStudent.bind(this);
  }

 addNewStudent (studentToAdd) {

    this.addStudentAndGetData(studentToAdd);

  }

  render() {
    return (
      <div className="App">
        <div>
          {this.props.isLoggedIn ? (
            <StudentAddNewRep
              initialValues={{ studentPicture: {} }}
              {...this.props}
              
              onSubmit={values => {
                this.addNewStudent(values);
              }}
            />
            ) : (
            <LoginPage />
          )}
        </div>
      </div>
    );
  }

  async addStudentAndGetData(studentToAdd) {

    const res1 = await axios.post("/addStudent", studentToAdd, {
      "content-type": "multipart/form-data"
    });

    const r1 = await res1.data.myStudent;
    //console.log("rs1", r1);

    if(!r1) return alert( "Error:Student not added!!!");

    const res2 = await axios.get("/students");
    const r2 = await res2.data.myStudents;
    this.props.getData(r2);

    alert("Student Added successfully...") ;
    this.props.history.push("/");

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
    getData: payload => dispatch(Types.actionCreator(Types.GET_STUDENTS, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentAddNew);

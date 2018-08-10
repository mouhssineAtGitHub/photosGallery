import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as Types from "../actions";

import StudentUpdateRep from "../components/StudentUpdateRep";
import LoginPage from "../containers/LoginPage";


//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });

class StudentUpdate extends Component {

  constructor() {
    super();

    this.updateStudentAndGetData = this.updateStudentAndGetData.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  updateStudent (studentToUpdate) {
    this.updateStudentAndGetData(studentToUpdate);
  }

  render() {
    const result = this.props.students.filter(studentObj => {return String(studentObj._id) === String(this.props.match.params._id);});

    const myStudent = result ? result[0] : null; // or undefined
    
    return (
  
      <div>
        {this.props.isLoggedIn ? (
          <StudentUpdateRep
          initialValues={myStudent}
          onSubmit={
            values => {
              this.updateStudent(values);
            }
          }
        />
        ) : (
          <LoginPage />
        )}
      </div>

    );
  }

    async updateStudentAndGetData(studentToUpdate) {

    const res1 = await axios.put('/updateStudent', studentToUpdate);
    const  updatedStudent = await res1.data.updatedStudent;
    
    if(!updatedStudent) return alert("Error: Student not updated!!!");
    
    const res2 = await axios.get('/students');
    const  r2 = await res2.data.myStudents;
    
    //Update the students Data state      
    this.props.getData(r2);  
    
    alert("Student updated successfully");
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
    getData: payload =>dispatch(Types.actionCreator(Types.GET_STUDENTS, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentUpdate);

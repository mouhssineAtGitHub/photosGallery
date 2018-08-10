import React from "react";
import { connect } from "react-redux";

import * as Types from "../actions";

import StudentDetailsRep from "../components/StudentDetailsRep";
import LoginPage from "../containers/LoginPage";

const StudentDetails = props => {

  const result = props.students.filter(studentObj => {
    return String(studentObj._id) === String(props.match.params._id);
  });

  const myStudent = result ? result[0] : null; // or undefined

  return (
    <div>
      {props.isLoggedIn ? (
        <StudentDetailsRep {...props} myStudent={myStudent} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

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
)(StudentDetails);
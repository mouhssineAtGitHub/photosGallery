import React, { Component } from "react";
import {Link} from "react-router-dom";

const StudentsRep = props => {
  
    return (
      <div className="cards-container">

        {props.students.map((student, i) => (

          <div className="card" key={i}>

            {/* <Link to={"/uploadFile/" + student._id + "/" + student.firstName+""}> */}
              <img
                className="img-students"
                src={student.src.toLowerCase()}
                // src={require(`../images/${student.src.toLowerCase()}`)}
              />
            {/* </Link> */}

            <h4>
              {student.firstName} {student.lastName}
            </h4>

            <span>
              
              <Link to={"/studentDetails/" + student._id}>
                <i className="fa fa-id-card-o" />
              </Link>

              <Link to={"/studentUpdate/" + student._id}>
                <i className="fa fa-pencil-square-o" />
              </Link>
              
              <Link to={"/uploadFile/" + student._id + "/" + student.firstName + ""}>
                <i className="fa fa-upload" />
              </Link>

              <Link to={"/"}>
                <i
                  className="fa fa-eraser"
                  onClick={() => {
                    props.handleClick(student._id);
                  }}
                />
              </Link>

            </span>
          </div>

        ))}

      </div>
    );
  }

export default StudentsRep;

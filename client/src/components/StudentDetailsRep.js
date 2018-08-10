import React from "react";
import { Link } from "react-router-dom";

const StudentDetailsRep = props => {
  
  return (
    <div className="details">
      <h2>Integrify Photos Gallery - Details page</h2>

      <div className="details-card">

        <div className="details-card-img">

          <img
            className="img-students" src={"/" + props.myStudent.src.toLowerCase()}
            // src={require(`../images/${props.myStudent.src.toLowerCase()}`)}

          />

          <span className="social-media">
            <Link to={"/studentDetails/" + props.myStudent._id}><i className="fa fa-github"></i></Link>
            <Link to={"/studentDetails/" + props.myStudent._id}><i className="fa fa-linkedin"></i></Link>
            <Link to={"/studentDetails/" + props.myStudent._id}><i className="fa fa-facebook"></i></Link>
            <Link to={"/studentDetails/" + props.myStudent._id}><i className="fa fa-twitter"></i></Link>
          </span>
          
        </div>
        
        <div className="details-card-info">

          <p className="student-fullname">
            I am {props.myStudent.firstName} {props.myStudent.lastName}
          </p>

          <p className="student-title"> {props.myStudent.title}</p>
          <p>
            <span>Nationality: </span>
            {props.myStudent.nationality}
          </p>
          <p>
            <span>skills:</span>
            {props.myStudent.skills.join(" ")}
          </p>
          <p>
            <span>why Softer Developer:</span>
            {props.myStudent.whySofterDeveloper}
          </p>
          <p>
            <span>long Term Vision:</span>
            {props.myStudent.longTermVision}
          </p>
          <p>
            <span>motivates Me:</span>
            {props.myStudent.motivatesMe}
          </p>
          <p>
            <span>favorite Quote:</span>
            {props.myStudent.favoriteQuote}
          </p>
          <p>
            <span>joined On:</span>
            {props.myStudent.joinedOn}
          </p>

          <p>
          <i className="fa fa-home back-home" onClick={() => props.history.push("/")} >
            Back to Home
          </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsRep;
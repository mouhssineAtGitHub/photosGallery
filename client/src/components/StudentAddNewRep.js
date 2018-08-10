import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Required");

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);
const maxLength200 = maxLength(200);

const firstName = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid firstname input"
    : undefined;

const lastName = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid lastname  input"
    : undefined;

const title = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid title input"
    : undefined;

const nationality = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid nationality input"
    : undefined;

const whySofterDeveloper = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid whySofterDEveloper input"
    : undefined;

const longTermVision = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid longTermVision input"
    : undefined;

const motivatesMe = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid motivatesMe input"
    : undefined;

const favoriteQuote = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid favoriteQuote input"
    : undefined;

const joinedOn = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid joinedOn input"
    : undefined;

const skills = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid skills input"
    : undefined;

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
  ...props
}) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className="form-fields"
    />
    <div className="err-msg">
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);



class StudentAddNewRep extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Add New Student Page</h2>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="firstName"
          validate={[required, firstName, maxLength50]}
          placeholder="firstName *"
          value="ggghhh"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="lastName"
          validate={[required, lastName, maxLength50]}
          placeholder="lastName *"
        />
        <Field
          name="title"
          type="text"
          component={renderField}
          label="title"
          validate={[required, title, maxLength50]}
          placeholder="title *"
        />
        <Field
          name="nationality"
          type="text"
          component={renderField}
          label="nationality"
          validate={[required, nationality, maxLength50]}
          placeholder="nationality *"
        />
        <Field
          name="whySofterDeveloper"
          placeholder="whySofterDeveloper *"
          type="text"
          component={renderField}
          label="whySofterDeveloper"
          validate={[required, whySofterDeveloper, maxLength50]}
        />
        <Field
          name="longTermVision"
          placeholder="longTermVision *"
          type="text"
          component={renderField}
          label="longTermVision"
          validate={[required, longTermVision, maxLength50]}
        />
        <Field
          name="motivatesMe"
          placeholder="motivatesMe *"
          type="text"
          component={renderField}
          label="motivatesMe"
          validate={[required, motivatesMe, maxLength50]}
        />
        <Field
          name="favoriteQuote"
          placeholder="favoriteQuote *"
          type="text"
          component={renderField}
          label="favoriteQuote"
          validate={[required, favoriteQuote, maxLength50]}
        />
        <Field
          name="joinedOn"
          placeholder="joinedOn *"
          type="text"
          component={renderField}
          label="joinedOn"
          validate={[required, maxLength50]}
        />
        <Field
          name="skills"
          placeholder="skills *"
          type="text"
          component={renderField}
          label="skills"
          validate={[required, maxLength50]}
        />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        <Link to="/">
          <button>Back To Main</button>
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  form: "addForm"
})(StudentAddNewRep);

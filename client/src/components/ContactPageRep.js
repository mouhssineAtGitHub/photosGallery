import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Required");

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);
const maxLength200 = maxLength(200);

const reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

const email = value =>
  value && !reg_email.test(value)
    ? "Invalid Email input"
    : undefined;

const content = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid Content input"
    : undefined;

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
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



class ContactPageRep extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>Contact Us Page</h2>
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
          name="email"
          type="text"
          component={renderField}
          label="Email"
          validate={[required, email, maxLength50]}
          placeholder="email *"
        />

        <Field
          name="content"
          placeholder="content *"
          type="textarea"
          cols="13"
          rows="12"
          component={renderField}
          label="content"
          validate={[required, content, maxLength50]}
        />
        
        <button type="submit" disabled={pristine || submitting}>
          Send
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Inputes
        </button>
        <button onClick={() => this.props.history.push("/")} >
          Back to Home
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "sendForm"
})(ContactPageRep);

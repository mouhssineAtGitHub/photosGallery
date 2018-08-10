import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Required");

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength50 = maxLength(50);

const userName = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid userName input"
    : undefined;

const password = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid password  input"
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



class LoginPageRep extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
        <form onSubmit={handleSubmit} >
        <h2>Login Page</h2>
        <Field
          name="userName"
          type="text"
          component={renderField}
          label="User Name"
          validate={[required, userName, maxLength50]}
          placeholder="User Name *"
        />
        
        <Field
          name="password"
          type="password"
          component={renderField}
          label="password"
          validate={[required, password, maxLength50]}
          placeholder="password *"
        />
        
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Inputes
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginForm"
})(LoginPageRep);

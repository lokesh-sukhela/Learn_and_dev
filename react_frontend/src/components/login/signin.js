import React from "react";
import { useState } from "react";

function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form className="sign-in-form" onSubmit={handleOnSubmit}>
      <h1 className="title">Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="email-input-feild"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="password-input-feild"
        />
        <a href="#" className = 'forgot-password'>Forgot your password?</a>
        <button className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;

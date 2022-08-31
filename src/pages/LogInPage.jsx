import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div>
      <h2>Welcome to my 5x5 Stronglifts App! Please Log in!</h2>
      <div>
        <label>Username!</label>
        <input></input>
        <br />
        <label>Password</label>
        <input></input>
        <br />
        <button>Log in</button>
        <br />
        <Link to="/user/fivebyfivepage">FiveByFivePage</Link>
        <br />
      </div>
      <Link to="/user/signuppage">Not a member yet? Sign up here</Link>
    </div>
  );
}

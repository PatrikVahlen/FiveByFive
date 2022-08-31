import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div>
      <h2>Sign up with you informatione below</h2>
      <div>
        <label>Username</label>
        <input></input>
        <br />
        <label>Password</label>
        <input></input>
        <br />
        <button>Sign Up!!</button>
        <br />
      </div>
      <Link to="/">Already a member?</Link>
    </div>
  );
}

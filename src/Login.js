import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login shit
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const demoSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword("demo@demo.com", "demopassword")
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //some fancy firebase register shit
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in to FAKE AMAZON!! NOT THE REAL AMAZON! THIS IS A CLONE</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login-sign-in-button"
          >
            Sign in
          </button>

          <button
            onClick={demoSignIn}
            type="submit"
            className="login-sign-in-button"
          >
            Demo Login
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login-registrationButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

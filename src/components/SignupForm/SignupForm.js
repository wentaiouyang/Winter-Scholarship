import React, { useState } from "react";
import classes from "./SignupForm.module.scss";
import firebase from "../Firebase/firebase";

const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [rePass, setRePass] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    if (password === rePass) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("error");
    }
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleRePass = (e) => {
    console.log(e.target.value);
    setRePass(e.target.value);
  };

  const handlePass = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <form className={classes.signupform}>
      <input
        type="text"
        onChange={handleEmail}
        className={classes.input_field}
        placeholder="Enter Email"
        required
      ></input>
      <input
        type="password"
        onChange={handlePass}
        className={classes.input_field}
        placeholder="Enter Password"
        required
      ></input>
      <input
        type="password"
        className={classes.input_field}
        onChange={handleRePass}
        placeholder="Enter Password Again"
        required
      ></input>

      <button type="submit" onClick={signUp} className={classes.submit_btn}>
        sign up
      </button>
    </form>
  );
};

export default SignupForm;

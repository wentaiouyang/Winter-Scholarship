import React, { useState, useContext } from "react";
import classes from "./LoginForm.module.scss";
import firebase from "../../components/Firebase/firebase";
import { AppContext } from "../../context/AppContext";
// import { withRouter } from "react-router-dom";

const LoginForm = (props) => {
  const setAuth = useContext(AppContext).setAuth;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(email, password);
        sessionStorage.setItem("isLogin", true);
        props.LoginSuccess();
        console.log(props.history);
      })
      .catch((err) => {
        props.LoginFail();
        console.log(err);
        console.log(email, password);
      });
  };

  return (
    <form className={classes.loginform}>
      <input
        type="text"
        className={classes.input_field}
        onChange={handleEmail}
        placeholder="enter email"
        required
      ></input>
      <input
        type="password"
        className={classes.input_field}
        onChange={handlePass}
        placeholder="enter password"
        required
      ></input>
      <button type="submit" className={classes.submit_btn} onClick={login}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;

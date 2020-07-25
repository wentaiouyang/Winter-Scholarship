import React, { useState } from "react";
import classes from "./LoginContainer.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";

export default function LoginContainer(props) {
  const [status, setStatus] = useState(1);
  const setSignup = () => {
    setStatus(0);
  };

  const setLogin = () => {
    setStatus(1);
  };
  return (
    <div className={classes.body}>
      <div className={classes.form}>
        <div className={classes.toggle}>
          <button
            type="button"
            onClick={setLogin}
            className={status ? classes.btn : ""}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={setSignup}
            className={status ? "" : classes.btn}
          >
            Sign Up
          </button>
        </div>
        {status === 1 ? <LoginForm LoginSuccess={props.LoginSuccess} LoginFail={props.LoginFail}/> : <SignupForm />}
      </div>
    </div>
  );
}

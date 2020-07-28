import React, { useState, useContext, useEffect } from "react";
import firebase from "../components/Firebase/firebase";
import { Redirect } from "react-router-dom";
import LoginContainer from "../components/LoginContainer/LoginContainer";
import { AppContext } from "../context/AppContext";
import { useToasts } from 'react-toast-notifications';

function LogIn(props) {
  const {user} = useContext(AppContext);
  const { addToast } = useToasts();

  const LoginSuccess = () =>{
    addToast('You are logged in', {
      appearance: 'success',
      autoDismiss: true,
      transitionDuration: 300,
      autoDismissTimeout: 2000,
    });
  }

  const LoginFail = () =>{
    addToast('Login Error', {
      appearance: 'error',
      autoDismiss: true,
      transitionDuration: 300,
      autoDismissTimeout: 2000,
    });
  }

  return user ? (
    <Redirect to="/Survey" />
  ) : (
    <div>
      <LoginContainer LoginSuccess={LoginSuccess} LoginFail={LoginFail}/>
    </div>
  );
}

export default LogIn;

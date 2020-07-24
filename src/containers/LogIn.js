import React, { useState, useContext, useEffect } from "react";

import firebase from "../components/Firebase/firebase";

import { Redirect } from "react-router-dom";
import LoginContainer from "../components/LoginContainer/LoginContainer";

function LogIn(props) {
  const [state, setState] = useState({ user: [] });

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setState({ user });
        //localStorage.setItem('user',user.uid);
      } else {
        setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [state.user]);

  return (
    <div>
      <LoginContainer />
    </div>
  );
}

export default LogIn;

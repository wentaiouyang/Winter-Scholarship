import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Router";
import firebase from "./components/Firebase/firebase";
import { AppContext } from "./context/AppContext";
import { ToastProvider } from "react-toast-notifications";

function App() {
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
  });

  return (
    <Router>
      <ToastProvider placement="top-center">
        <AppContext.Provider
          value={{
            user: state.user,
          }}
        >
          <div className="App">
            <NavBar />
            <Routes />
          </div>
        </AppContext.Provider>
      </ToastProvider>
    </Router>
  );
}

export default App;

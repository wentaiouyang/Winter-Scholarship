import React, { useState, useEffect, useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Router";
import axios from "axios";
import firebase from "./components/Firebase/firebase";
import { AppContext } from "./context/AppContext";
import { ToastProvider } from "react-toast-notifications";

const SHEET_ID = "1p-CjJgmzIRmepETjpt7fJTPFiSypiebX-E0ZBUgUHX8";
const ACCESS_TOKEN =
  "ya29.a0AfH6SMBVBZ047OGzS9eP6LD1_L2wMFkmdBY0H7swNhmnGpYz-t-NiiQCipJJxNQtk0twB_rbxLuTmQw7JrUQ9Yv90d68405yAzXieje78Ldv1krLNMrlnNwUgE9k1DMjZP67lxTxc9SAIPIhCgOkWhNaCcgqVFY0oEQ";

function App() {
  const [state, setState] = useState({ user: [] });
  const [result, setResult] = useState("");
  const user = useContext(AppContext);

  const getData = () => {
    if (localStorage.user) {
      const pie_url = "http://localhost:80/back-end/getpiechartdata.php";
      const bar_url = "http://localhost:80/back-end/getbarchartdata.php";
      const formData = new FormData();
      formData.append("user", "leaves_sg@outlook.com");
      axios
        .post(pie_url, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .post(bar_url, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    console.log(localStorage.user);
    getData();
  }, [result]);

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setState({ user });
        localStorage.setItem("user", user.email);
      } else {
        setState({ user: null });
        localStorage.removeItem("user");
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

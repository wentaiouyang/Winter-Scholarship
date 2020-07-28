import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Router";
import firebase from "./components/Firebase/firebase";
import { AppContext } from "./context/AppContext";
import { ToastProvider } from "react-toast-notifications";
// import { DataProcessor } from "./dataprocessor";

const SHEET_ID = "1p-CjJgmzIRmepETjpt7fJTPFiSypiebX-E0ZBUgUHX8";
const ACCESS_TOKEN =
  "ya29.a0AfH6SMD4XhKNhsBts2ku5ez4bqQ3BC08_HWdXQnDLREfmy6U3XB4B_z0wd_cClTAhJq2hIpXHvl2F4nf0mEj6f9_EKLDSNAn_lAxjlzASu5137kJRHmDnTXRd1Mf_uatT4AH0LcFtir8XFpOowfeJrS5JaL97i_zdJE";

function App() {
  const [state, setState] = useState({ user: [] });
  const [result, setResult] = useState("");

  // fetch data
  const getSheetValues = async () => {
    const request = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A:CM`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    const data = await request.json();
    console.log(data);
    console.log(state.user);
    setResult(data);
  };
  // console.log(1, data);
  // var dataProcessor = new DataProcessor(result);

  useEffect(() => {
    getSheetValues();
    // dataProcessor.getPersonalData(state.user.b.email);
  }, [result]);

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

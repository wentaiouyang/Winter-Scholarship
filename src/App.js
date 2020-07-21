import React,{ useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes/Router';
import './App.css';
import {AppContext} from './context/AppContext';


function App() {
  const [state,setState]=useState({
    isLogin:false,
    setAuth:()=>{
      setState({isLogin:true})
    },
    setLogout:()=>{
      setState({isLogin:false})
    }
    })
  return (
    <Router> 
      <AppContext.Provider value={{
        isLogin:state.isLogin,
        setAuth:state.setAuth,
        setLogout:state.setLogout
      }} >
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;

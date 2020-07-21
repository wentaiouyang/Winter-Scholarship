import React,{useState, useContext} from 'react';
import classes from './Login.module.scss';

import LoginForm from '../components/LoginForm/LoginForm';
import SignupForm from '../components/SignupForm/SignupForm';

const LogIn = ()=> {
    const [status, setStatus]=useState(1);

    const setSignup = () => {
        setStatus(0);
    }

    const setLogin = () => {
        setStatus(1);
    }

    return (
        <div className = {classes.body}>
            <div className = {classes.form}>
                <div className ={classes.toggle}>
                    <div className= {classes.btn}></div>
                    <button type="button" onClick={setLogin}>Log In</button>
                    <button type="button" onClick={setSignup}>Sign Up</button>
                </div>
            </div>
            {status===1?<LoginForm/>:<SignupForm/>} 
        
        </div>
    )
}

export default LogIn;

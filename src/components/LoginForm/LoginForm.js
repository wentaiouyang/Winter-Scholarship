import React,{useState, useContext} from 'react';
import classes from './LoginForm.module.scss';
import firebase from '../../components/Firebase/firebase';
import { AppContext } from '../../context/AppContext';

const LoginForm = (props) => {
    const setAuth = useContext(AppContext).setAuth;
    const [userState,setUserState] = useState({
        email: "",
        password: "",
    });

    const handleEmail = (e) => {
        console.log(e.target.value);
        setUserState({
            email:e.target.value,
        })
    }

    const handlePass = (e) => {
        console.log(e.target.value);
        setUserState({
            password:e.target.value,
        })
    }



    const login = (e) => {
        e.preventDefault();
        firebase.auth()
        .signInWithEmailAndPassword(`${userState.email}`,`${userState.password}`)
        .then((res)=>{
            console.log(userState.email,userState.password);
            setAuth();
            props.history.push("/Survey");
        })
        .catch((err)=>{
            console.log(err);
            console.log(userState.email,userState.password);
        })
    }
    
    
    return (
        <div>
            <form className={classes.loginform}>
                <input type="text" className={classes.input_field} onChange={handleEmail} placeholder="enter email" required></input>
                <input type="password" className={classes.input_field} onChange={handlePass} placeholder="enter password" required></input>
                <button type="submit" className={classes.submit_btn} onClick={login}>log in</button>
            </form>  
        </div>
    )
}

export default LoginForm;

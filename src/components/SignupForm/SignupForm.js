import React from 'react';
import classes from './SignupForm.module.scss';

const SignupForm = (props) =>  {
    return (
        <div>
            <form className={classes.signupform}>
                <input type="text" className={classes.input_field} placeholder="user Id" required></input>
                <input type="password" className={classes.input_field} placeholder="enter password" required></input>
                <input type="text" className={classes.input_field}  placeholder="enter email" required></input>
                <button type="submit" className={classes.submit_btn} >sign up</button>
            </form> 
        </div>
    )
}

export default SignupForm;

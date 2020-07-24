import React from 'react'

export default function Signup() {
    return (
        <div>
            <form className={classes.signupform}>
                <input type="text" className={classes.input_field} placeholder="user Id" required></input>
                <input type="password" className={classes.input_field} onChange = {handlePass} placeholder="enter password" required></input>
                <input type="text" className={classes.input_field} onChange={handleEmail} placeholder="enter email" required></input>
                <button type="submit" className={classes.submit_btn} onClick={login} >sign up</button>
            </form>
        </div>
    )
}

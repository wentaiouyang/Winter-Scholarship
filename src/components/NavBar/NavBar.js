import React from 'react';
import logo from '../../img/logo.png';
import classes from './NavBar.module.scss';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
            <div className={classes.logoBtn}>
                <div className={classes.leftPart}>
                    <Link to="/">
                        <img className={classes.logoImg} src={logo} alt=""/>
                    </Link>
                </div>
                <div className={classes.rightPart}>
                    <ul className={classes.btn}>

                        <Link className={classes.tabs} to="/Survey">
                            <li>SURVEY</li>
                        </Link>
                        <Link className={classes.tabs} to="/LogIn">
                            <li>LOGIN</li>
                        </Link>
                        <Link className={classes.tabs} to="/Glossary">
                            <li>Glossary</li>    
                        </Link>
                        <Link className={classes.tabs .link} to="/Sidebar">
                            <li>☰</li>      
                        </Link>
                       
                    </ul>
                </div>
            </div>
        </nav>
     
    );
}

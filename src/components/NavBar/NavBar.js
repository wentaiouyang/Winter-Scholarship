import React, { useContext, useState } from "react";
import logo from "../../img/logo.png";
import classes from "./NavBar.module.scss";
import firebase from "../Firebase/firebase";
import MenuButton from "../HamburgerButton/HamburgerButton";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import ToggleNav from "../ToggleNav/ToggleNav";

export default function NavBar() {
  const { user } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log("success");
          console.log(user);
        },
        function (error) {
          console.log("error");
        }
      );
  };

  let toggleNav;
  if (open) {
    toggleNav = <ToggleNav bgClick={handleClick} />;
  }

  return (
    <nav>
      <div className={classes.logoBtn}>
        <div className={classes.leftPart}>
          <Link to="/">
            <img className={classes.logoImg} src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.rightPart}>
          <ul className={classes.btn}>
            <Link className={classes.tabs} to="/Survey">
              <li>SURVEY</li>
            </Link>
            <Link className={classes.tabs} to="/Glossary">
              <li>GLOSSARY</li>
            </Link>
            {user ? (
              ""
            ) : (
              <Link className={classes.tabs} to="/LogIn">
                <li>LOGIN</li>
              </Link>
            )}
          </ul>
          {user ? <button className={classes.logout} onClick={handleLogout}>Logout</button> : ""}
          <div className="menuBtn">
            <MenuButton open={open} onClick={handleClick} />
          </div>
        </div>
      </div>
      {toggleNav}
    </nav>
  );
}

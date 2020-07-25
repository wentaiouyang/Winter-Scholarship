import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ToggleNav.css";

class ToggleNav extends Component {
  render() {
    return (
      <div className="toggleMenu" onClick={this.props.bgClick}>
        <ul className="toggle_nav_tags">
          <li>
            <NavLink
              className="toggle_navTag"
              exact
              to="/"
              activeStyle={{ borderBottom: "#957546 solid 2px" }}
            >
              PROFILE
            </NavLink>
          </li>
          <li>
            <NavLink
              className="toggle_navTag"
              to="/about"
              activeStyle={{ borderBottom: "#957546 solid 2px" }}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="toggle_navTag"
              to="/results"
              activeStyle={{ borderBottom: "#957546 solid 2px" }}
            >
              RESULTS
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ToggleNav;

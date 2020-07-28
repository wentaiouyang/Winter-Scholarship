import React from "react";
import classes from "./Home.module.scss";
import data from "../content/content";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.background} />
      <h1>
        SCHOOL PHYSICAL ACTIVITY INDEX SURVEY <br></br>(SPAIS)
      </h1>
      <div className={classes.introduction}>
        <div className={classes.introTitle}>what's this research about</div>
        <p>{data.home.description1}</p>
        <div className={classes.introTitle}>How is the SPAI developed</div>
        <p>{data.home.description2}</p>
        <Link to="/Survey">
          <button type="submit" className={classes.button1}>
            Start Survey
          </button>
        </Link>
      </div>
    </div>
  );
}

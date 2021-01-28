import React from "react"
import Visualization from "../components/Visualization/Visualization"
import classes from "./Results.module.scss"

function Results() {
  return (
    <div className={classes.container}>
      <Visualization />
    </div>
  )
}

export default Results

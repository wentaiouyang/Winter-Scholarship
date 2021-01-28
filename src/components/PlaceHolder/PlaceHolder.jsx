import React from "react"
import classes from "./PlaceHolder.module.scss"

function PlaceHolder() {
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={require("../../img/Nodata.png")}
        alt=""
      />
      <p>No data here, Please complete the survey first!</p>
    </div>
  )
}

export default PlaceHolder

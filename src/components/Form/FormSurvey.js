import React from "react";
import classes from "./FormSurvey.module.scss";
import data from "../../content/content";

export default function FormSurvey() {
  return (
    <container className={classes.container}>
      <iframe
        className={classes.survey}
        src="https://docs.google.com/forms/d/e/1FAIpQLScL05EE2T0EtpfxZ7JyDPyaSevlKffLJs6eziEYIDfFSvnlzg/viewform?embedded=true"
        width="640"
        height="951"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </container>
  );
}

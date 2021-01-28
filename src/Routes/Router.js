import React from "react"
import Home from "../containers/Home"
import Survey from "../containers/Survey"
import LogIn from "../containers/LogIn"
import Glossary from "../containers/Glossary"
import Window from "../containers/Window"
import Sidebar from "../containers/Sidebar"

import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Results from "../containers/Results"

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/Survey" component={Survey} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/Glossary" component={Glossary} />
        <Route exact path="/Sidebar" component={Sidebar} />
        <Route exact path="/Window" component={Window} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  )
}

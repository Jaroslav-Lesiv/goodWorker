import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Block } from "../../ui";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

const HeaderRouter = ({}) => (
  <Switch>
    <Route path="/" exact component={AuthHeader} />
  </Switch>
);

const AuthHeader = ({}) => (
  <Slide direction="right" in={true} mountOnEnter unmountOnExit>
    <Block>
      <Typography variant="title" color="inherit">
        Auth
      </Typography>
    </Block>
  </Slide>
);

export default withRouter(HeaderRouter);

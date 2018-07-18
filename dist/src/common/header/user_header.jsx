import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Block } from "../../ui";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TimerIcon from "@material-ui/icons/Timer";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Button from '@material-ui/core/Button';


const UserHeaderRouter = ({}) => (
  <Switch>
    <Route path="/" exact component={HomeHeader} />
    <Route path="/create" component={CreateHeader} />
  </Switch>
);
const CreateHeader = ({ history }) => (
  <Slide direction="right" in={true} mountOnEnter unmountOnExit>
    <Block>
        <Button variant="fab" mini color="default"onClick={history.goBack} aria-label="add">
          <ArrowBack  />
        </Button>
     
      <Typography variant="title" color="inherit">
        Create Task
      </Typography>
      <TimerIcon color={`white`} />
    </Block>
  </Slide>
);
const HomeHeader = ({}) => (
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Block>
      <Typography variant="title" color="inherit">
        Home
      </Typography>
      <AccountCircle />
    </Block>
  </Slide>
);

export default withRouter(UserHeaderRouter);

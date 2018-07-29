import React, { Component } from "react";
import { task } from "../../redux/actions";
import Slide from "@material-ui/core/Slide";
import {
  Block,
  Input,
  ButtonUI,
  BlockForm,
  TimeInput,
  TextArea
} from "../../ui";
import { validate, toSeconds } from "../../helper";
import { connect } from "react-redux";

import { Label, Description, Timer } from "@material-ui/icons";


const mapDispatchToProps = {
  addTask: task.addTask
};

@connect(
  null,
  mapDispatchToProps
)
export default class CreateTaskPage extends Component {
  state = {
    errors: {},
    label: "",
    description: "",
    hour: 0,
    minutes: 0
  };

  handleChangeInput = name => event => {
    const { value } = event.target;
    this.setState(state => ({
      errors: { ...state.errors, [name]: null },
      [name]: value
    }));
  };

  clearData = () => {
    this.setState({
      errors: {},
      label: "",
      description: "",
      hour: 0,
      minutes: 0
    });
  };

  submit = event => {
    event.preventDefault();
    const { label, description, hour, minutes } = this.state;
    if (
      validate({ label, description, hour, minutes }, errors =>
        this.setState({ errors: { ...errors } })
      )
    ) {
      const data = {
        label,
        description,
        plain_time: toSeconds(hour, "hour") + toSeconds(minutes, "minutes"),
        spend_time: 0,
      };
      this.props.addTask(data);
      this.clearData();
      this.props.history.push("/");
    }
  };

  render() {
    const { errors, label, description, hour, minutes } = this.state;
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Block>
          <BlockForm
            onSubmit={this.submit}
            direction={"column"}
            align={"center"}
            justify={"flex-start"}
            style={{ width: "100%", height: "auto" }}
          >
            <Input
              type="text"
              error={errors.label}
              placeholder="Enter label "
              value={label}
              onChange={this.handleChangeInput("label")}
              icon={<Label />}
            />

            <TextArea
              type="text"
              error={errors.description}
              placeholder="Enter description "
              value={description}
              onChange={this.handleChangeInput("description")}
              icon={<Description />}
            />

            <Block justify={`center`} align={`start`} grow={`initial`}>
              <TimeInput
                error={errors.hour}
                placeholder="Hours"
                value={hour}
                helperText={`Hours`}
                onChange={this.handleChangeInput("hour")}
                icon={<Timer />}
              />

              <TimeInput
                error={errors.minutes}
                placeholder="Hours"
                value={minutes}
                helperText={`Minutes`}
                onChange={this.handleChangeInput("minutes")}
                icon={<Timer />}
              />
            </Block>

            <ButtonUI type={`submit`}>Create task</ButtonUI>
          </BlockForm>
        </Block>
      </Slide>
    );
  }
}

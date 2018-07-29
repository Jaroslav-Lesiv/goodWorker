import styled from "styled-components";
import React from "react";
import { color, styles, animation } from "../variables";
import {
  Done,
  Stop,
  TapAndPlay,
  Add,
  PlaylistAdd,
  PlaylistAddCheck,
  PlaylistPlay
} from "@material-ui/icons";
import { Button, Checkbox as CheckboxMUI } from "@material-ui/core";
import { Block } from "../main";
import { toDate } from "../../helper";
import { Link } from "react-router-dom";
import shadows from "@material-ui/core/styles/shadows";
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";
import ToggleRadioButtonUnchecked from "material-ui/SvgIcon";
import { APP_NAME } from "../../config";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

const Checkbox = styled(CheckboxMUI).attrs({
  icon: <RadioButtonUnchecked />,
  checkedIcon: <RadioButtonChecked />
})`
  color: ${({ checked }) => (checked ? color.primary : color.text_color)};
`;

const TaskItemUI = styled.li.attrs({
  className: `${APP_NAME}_TaskItemUI`
})`
  &.${APP_NAME}_TaskItemUI {
    width: 100%;
    margin: 3px 0;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 9px -6px,
      rgba(0, 0, 0, 0.3) 0px 11px 9px -11px,
      rgba(0, 0, 0, 0.3) 0px -4px 9px -6px,
      rgba(0, 0, 0, 0.3) 0px -6px 9px -11px !important;
    padding: 10px 15px;
    list-style: none;
    display: flex;
    background-color: ${color.white};
    align-items: center;
    transition: ${animation.fast};
    cursor: pointer;
  }
`;

const CreateTaskItemUI = styled(TaskItemUI).attrs({
  className: `${APP_NAME}_CreateTaskItemUI`
})`
  &.${APP_NAME}_CreateTaskItemUI {
  }
`;

const TaskLabel = styled.h4.attrs({
  className: `${APP_NAME}_TaskLabel`
})`
  &.${APP_NAME}_TaskLabel {
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 1.3 !important;
    color: ${color.primary} !important;
  }
`;

const TaskDescription = styled.p`
  margin: 0;
  color: ${color.dark};
  font-size: 14px;
`;

const ControlIcon = styled.button.attrs({
  className: `${APP_NAME}_ControlIcon`
})`
  &.${APP_NAME}_ControlIcon {
    border: none;
    background-color: #ffffff;
    svg {
      color:  ${color.light}
      font-size: 35px;
    }
  }
`;

const validate = string =>
  string.length > 120 ? `${string.slice(0, 120)}...` : string;

const TaskItem = ({
  label,
  id,
  description = "",
  spend_time,
  plain_time,
  onClick,
  selected,
  onActivate,
  onDone,
  onDisable
}) => (
  <TaskItemUI id={id}>
    <Checkbox checked={selected} onChange={onClick} value="checked" />
    <Block direction={`column`} align={`flex-start`}>
      <TaskLabel>{label}</TaskLabel>
      <Block>
        <TimeUI>
          {toDate(spend_time)} / {toDate(plain_time)}
        </TimeUI>

        <Block justify={`flex-end`}>
          <ControlIcon onClick={onDone} aria-label="done">
            <PlaylistAddCheck />
          </ControlIcon>
          <ControlIcon onClick={onActivate} aria-label="add">
            <PlaylistPlay />
          </ControlIcon>
          <ControlIcon onClick={onDisable} aria-label="stop">
            <Stop />
          </ControlIcon>
        </Block>
      </Block>
      {/* <TaskDescription>{validate(description)}</TaskDescription> */}
    </Block>
    {/* <Block direction={`column`} align={`flex-end`}> */}

    {/* </Block> */}
    {/* </Block> */}
  </TaskItemUI>
);

const CreateNewTaskLink = styled(Link).attrs({
  className: `${APP_NAME}_CreateNewTaskLink`
})`
  &.${APP_NAME}_CreateNewTaskLink {
    color: rgba(15, 157, 88, 0.5) !important;
    text-decoration: none !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    svg {
      margin-right: 15px !important;
    }
    &:hover {
      color: ${color.primary} !important;
    }
  }
`;

const CreateNewTaskItem = () => (
  <CreateTaskItemUI>
    <CreateNewTaskLink to={`/create`}>
      <Add /> Create new task
    </CreateNewTaskLink>
  </CreateTaskItemUI>
);
const DoneTaskItem = ({
  label,
  id,
  description = "",
  spend_time,
  plain_time,
  onClick,
  selected,
  onRemoveFromDoneTask
}) => (
  <TaskItemUI id={id}>
    <Checkbox
      checked={selected}
      onChange={onClick}
      value="checked"
      color="secondary"
    />
    <Block direction={`column`}>
      <TaskLabel>
        {label} {toDate(spend_time)} {toDate(plain_time)}
      </TaskLabel>
      <TaskDescription>{validate(description)}</TaskDescription>
    </Block>

    {/* TODO: remove from done onClick */}
    <Button
      variant="fab"
      mini
      color="default"
      onClick={onRemoveFromDoneTask}
      aria-label="add"
    >
      <Done />
    </Button>
  </TaskItemUI>
);

const TimeUI = styled.div`
  color: ${color.primary};
  background-color: ${color.light};
  font-size: 10px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 2px 12px;
  font-weight: 600;
  line-height: 2;
  box-shadow: ${shadows["2"]};
`;

export { TaskList, TaskItem, DoneTaskItem, TimeUI, CreateNewTaskItem };

import styled from "styled-components";
import React from "react";
import { color, styles, animation } from "../const";
import {ViewList, Done, Stop} from "@material-ui/icons";
import { Button, Checkbox } from '@material-ui/core'
import { Block } from "../main";
import { toTime } from '../../helper'

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

const TaskItemUI = styled.li`
  width: 100%;
  margin: 3px 0;
  border-radius: 3px;
  box-shadow: ${styles.boxShadow};
  padding: 10px 15px;
  list-style: none;
  display: flex;
  background-color: ${color.white};
  align-items: center;
  transition: ${animation.fast};
  cursor: pointer;
`;

const TaskLabel = styled.header`
  font-weight: 500;

  font-size: 18px;
  line-height: 25px;
  color: ${color.dark};
`;

const TaskDescription = styled.p`
  margin: 0;
  color: ${color.dark};
  font-size: 14px;
`;

const validate = string =>
  string.length > 120 ? `${string.slice(0, 120)}...` : string;



const TaskItem = ({
  label,
  id,
  description,
  spend_time,
  plain_time,
  onClick,
  selected,
  onActivate,
  active,
  onDisable,
  trackTasck
}) => {
    const textColor = selected ? color.white : color.dark
    const iconColor = selected ? color.white : color.primary
    const bgColor = selected ? color.primary : color.white
    return (
  <TaskItemUI id={id}>
    <Checkbox
        checked={selected}
        onChange={onClick}
        value="checked"
        color="secondary"
      />
    <Block direction={`column`}>
      <TaskLabel >
        {label} {toTime(spend_time)} {toTime(plain_time)}
      </TaskLabel>
      <TaskDescription >{validate(description)}</TaskDescription>
    </Block>
    <Button variant="fab" mini color="default" onClick={onActivate} aria-label="add">
        <Done  />
      </Button>
      <Button variant="fab" mini color="default" onClick={onDisable} aria-label="add">
        <Stop  />
      </Button>
     
    
    {/* <Switch
        checked={active}
        // onChange={trackTasck}
        value="checkedB"
        color="primary"
    /> */}
  </TaskItemUI>
)};


export { TaskList, TaskItem };

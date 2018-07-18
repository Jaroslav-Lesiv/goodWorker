import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { task } from "../../redux/actions";
import SpeedDial from "../../components/speed_dial";
import { TaskList, TaskItem, Block } from "../../ui";
import Slide from "@material-ui/core/Slide";
import TaskControl from './control_panel'

const mapStateToProps = ({ task }) => ({
  task_list: task.list,
  selected_task: task.selected
});

const mapDispatchToProps = {
  taskSelect: task.taskSelect,
  deleteOneTask: task.deleteOneTask,
  activateTask: task.activateTask,
  disableTask: task.disableTask,
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class TaskPages extends Component {
  static propTypes = {
    prop: PropTypes
  };

  selectTask = _id => {
    this.props.taskSelect(_id);
  };

  deleteTask = _id => this.props.deleteOneTask(_id);

  onActivate = _id => this.props.activateTask(_id)

  onDisable = _id => this.props.disableTask(_id)

  render() {
    const { task_list, selected_task } = this.props;
    return (
      
        <Block align={`flex-start`}>
        <TaskControl />
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <TaskList>
            {task_list.map(task => (
              <TaskItem
                key={task.id}
                label={task.label}
                selected={selected_task.includes(task.id)}
                id={task.id}
                onClick={() => this.selectTask(task.id)}
                // onDelete={this.deleteTask(task.id)}
                description={task.description}
                spend_time={task.spend_time}
                plain_time={task.plain_time}
                onActivate={() =>this.onActivate(task.id)}
                onDisable={() =>this.onDisable(task.id)}
              />
            ))}
          </TaskList>
          
      </Slide>
      
      <SpeedDial />
        </Block>
    );
  }
}

export default TaskPages;

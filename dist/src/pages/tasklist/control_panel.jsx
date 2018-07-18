import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { task } from "../../redux/actions";
import SpeedDial from "../../components/speed_dial";
import { TaskList, TaskItem, Block } from "../../ui";
import Slide from "@material-ui/core/Slide";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const mapStateToProps = ({ task }) => ({
  task_list: task.list,
  selected_task: task.selected
});

const mapDispatchToProps = {
  selectAll: task.selectAll,
  unselectAll: task.unselectAll
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class TaskControl extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { task_list, selected_task } = this.props;
    const selectedAll = selected_task.length === task_list.length
    return (
      <Block align={`center`} justify={`space-between`}>
        
        

        <FormControlLabel
          control={
            <Checkbox
              checked={selectedAll}
              onChange={
                selectedAll
                  ? this.props.unselectAll
                  : this.props.selectAll
              }
              value="checkedAll"
              color="primary"
            />
          }
          label={selectedAll ? `Remove All` : `Select All`}
        />


        {selected_task.length > 0 ? (
          <Typography>Selected {selected_task.length}</Typography>
        ) : null}
      </Block>
    );
  }
}

export default TaskControl;

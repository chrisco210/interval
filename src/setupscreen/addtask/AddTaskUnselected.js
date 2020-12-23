import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

class AddTaskUnselected extends React.Component {
  render() {
    return (
      <ListItem button onClick={() => this.props.onClick()}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add new task"></ListItemText>
      </ListItem>
    );
  }
}

export default AddTaskUnselected
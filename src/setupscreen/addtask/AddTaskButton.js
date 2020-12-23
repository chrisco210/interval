import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add'
import { ListItemText } from '@material-ui/core';

class AddTaskButton extends React.Component {
  render() {
    return (
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add new task"></ListItemText>
      </ListItem>
    );
  }
}

export default AddTaskButton
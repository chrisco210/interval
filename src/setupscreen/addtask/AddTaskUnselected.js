import React from 'react';

import ListItem from '@material-ui/core/ListItem';

import { ListItemText } from '@material-ui/core';

class AddTaskUnselected extends React.Component {
  render() {
    return (
      <ListItem button onClick={() => this.props.onClick()}>
        <ListItemText primary="Add new task"></ListItemText>
      </ListItem>
    );
  }
}

export default AddTaskUnselected
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

class AddTaskForm extends React.Component {
  render() {
    
    return (
      <ListItem>
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <CheckIcon />
            </IconButton>
        </ListItemSecondaryAction>
        <form>
          <TextField id="task" variant="filled" label="Task Name"/>
          <TextField id="length" variant="filled" label="Task Duration (Minutes)"/>
          <TextField id="length" variant="filled" label="Intensity" 
            InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}}
          />
        </form>
      </ListItem>  
    )
  }
}

export default AddTaskForm
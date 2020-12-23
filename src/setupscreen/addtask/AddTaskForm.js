import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

class AddTaskForm extends React.Component {
  render() {
    const fieldsInvalid = !this.props.fieldsValid.intensity 
              || !this.props.fieldsValid.duration
              || !this.props.fieldsValid.task;

    return (
      <ListItem>
        <form>
          <TextField 
            error={!this.props.fieldsValid.task}
            required id="task" 
            variant="filled" 
            label="Task Name"
            onChange={(e) => this.props.onUpdate('task', e.target.value)}/>
          <TextField 
            error={!this.props.fieldsValid.duration}
            required id="duration" 
            variant="filled"
            label="Task Duration (Minutes)"
            onChange={(e) => this.props.onUpdate('duration', e.target.value)}/>
          <TextField 
            error={!this.props.fieldsValid.intensity}
            required id="intensity" 
            variant="filled" 
            label="Intensity" 
            onChange={(e) => this.props.onUpdate('intensity', e.target.value)}
            InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}}
          />
        </form>
        <ListItemSecondaryAction>
          <IconButton 
            edge="end" 
            onClick={() => this.props.onSubmit()}
            color="error"
            disabled={fieldsInvalid}>
            <CheckIcon />
          </IconButton>
          
        </ListItemSecondaryAction>
      </ListItem>  
    )
  }
}

export default AddTaskForm
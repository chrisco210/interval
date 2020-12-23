import React from 'react'
import ProgramSelector from './ProgramSelector'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography'

class SetupView extends React.Component {
  onDelete(index) {
    const newProgram = removeFromArray(this.props.program, index);
    this.props.onNewProgram(newProgram);
  }

  onDragEnd(result) {
    if(!result.destination) {
      return;
    }

    const items = reorder(
      this.props.program, 
      result.source.index,
      result.destination.index
    );

    this.props.onNewProgram(items);
  }

  addNewTask(task) {
    const newArr = this.props.program.slice().concat(task);
    this.props.onNewProgram(newArr)
  }

  render() {
    return (
      <Container maxWidth="md">
        <Typography variant="h1" component="h2">
          Setup Workout
        </Typography>
        <ProgramSelector
          program={this.props.program} 
          presets={this.props.presets}
          onDragEnd={(r) => this.onDragEnd(r)}
          onDelete={(i) => this.onDelete(i)}
          onPresetSelect={(i) => {
            this.props.onNewProgram(this.props.presets[i].tasks)
          }}
          onNewTask={(t) => this.addNewTask(t)}
        />
        <Button variant="contained" component={RouterLink} to="/">Start</Button>
      </Container>
    )
  }
}

function reorder(list, start, end) {
  const result = Array.from(list);
  const [removed] = result.splice(start, 1);
  result.splice(end, 0, removed);
  return result;
} 

function removeFromArray(list, index) {
  return list.slice(0, index).concat(list.slice(index + 1, list.length))
}

export default SetupView
import React from 'react'
import ProgramSelector from './ProgramSelector'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography'

class SetupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: this.props.presets[0].tasks
    };
  }

  onDelete(index) {
    const newProgram = removeFromArray(this.state.program, index);
    this.setState({program: newProgram})
  }

  onDragEnd(result) {
    if(!result.destination) {
      return;
    }

    const items = reorder(
      this.state.program, 
      result.source.index,
      result.destination.index
    );

    this.setState({program: items})
  }

  addNewTask(task) {
    const newArr = this.state.program.slice().concat(task);
    this.setState({program: newArr});
  }

  render() {
    return (
      <Container maxWidth="md">
        <Typography variant="h1" component="h2">
          Setup Workout
        </Typography>
        <ProgramSelector
          program={this.state.program} 
          presets={this.props.presets}
          onDragEnd={(r) => this.onDragEnd(r)}
          onDelete={(i) => this.onDelete(i)}
          onPresetSelect={(i) => {
            this.setState({program: this.props.presets[i].tasks})
          }}
          onNewTask={(t) => this.addNewTask(t)}
        />
        <Button variant="contained">Start</Button>
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
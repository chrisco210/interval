import React from 'react'
import ProgramSelector from './ProgramSelector'
import Container from '@material-ui/core/Container';

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

  render() {
    return (

      <Container maxWidth="md">
        <Typography variant="h1" component="h2">
          Setup Exercise
        </Typography>
        <p>
          {JSON.stringify(this.state.program)}
        </p>
        <hr></hr>
        <ProgramSelector
          program={this.state.program} 
          onDragEnd={(r) => this.onDragEnd(r)}
          onDelete={(i) => this.onDelete(i)}
        />
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
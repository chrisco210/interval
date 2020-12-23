import React from 'react'
import ProgramSelector from './ProgramSelector'

import Typography from '@material-ui/core/Typography'

class SetupView extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      program: []
    })
  }

  render() {
    return (
      <div>
        <Typography variant="h1" component="h2">
          Setup Exercise
        </Typography>
        <ProgramSelector />
      </div>
    )
  }
}

function reorder(list, start, end) {
  const result = Array.from(list);
  const [removed] = result.splice(start, 1);
  result.splice(end, 0, removed);

  return result;
} 

export default SetupView
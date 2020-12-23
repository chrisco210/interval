import React from 'react'
import Grid from '@material-ui/core/Grid';
import WorkoutSidebar from './WorkoutSidebar'

const TEMP_MOCK = [
  {task: "task 1", duration: 1, intensity: 1},
  {task: "task 2", duration: 1, intensity: 1},
  {task: "task 3", duration: 1, intensity: 1},
  {task: "task 4", duration: 1, intensity: 1},
  {task: "task 5", duration: 1, intensity: 1},
  {task: "task 6", duration: 1, intensity: 1},
  {task: "task 7", duration: 1, intensity: 1},
  {task: "task 1", duration: 1, intensity: 1},
  {task: "task 2", duration: 1, intensity: 1},
  {task: "task 3", duration: 1, intensity: 1},
  {task: "task 4", duration: 1, intensity: 1},
  {task: "task 5", duration: 1, intensity: 1},
  {task: "task 6", duration: 1, intensity: 1},
  {task: "task 7", duration: 1, intensity: 1},
  {task: "task 1", duration: 1, intensity: 1},
  {task: "task 2", duration: 1, intensity: 1},
  {task: "task 3", duration: 1, intensity: 1},
  {task: "task 4", duration: 1, intensity: 1},
  {task: "task 5", duration: 1, intensity: 1},
  {task: "task 6", duration: 1, intensity: 1},
  {task: "task 7", duration: 1, intensity: 1},
  
]

class WorkoutView extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <WorkoutSidebar program={TEMP_MOCK}/>
          </Grid>
          <Grid item xs={12} md={9}>
            <p>Test 2</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default WorkoutView
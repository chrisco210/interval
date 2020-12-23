import React from 'react'
import Grid from '@material-ui/core/Grid';
import WorkoutSidebar from './WorkoutSidebar'

class WorkoutView extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <WorkoutSidebar />
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
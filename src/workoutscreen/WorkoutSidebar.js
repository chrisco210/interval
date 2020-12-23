import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ClockDisplay from './ClockDisplay'

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    height: '100%',
    maxHeight: '100%'
  }
}))

export default function WorkoutSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.fullHeight}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ClockDisplay title="Elapsed Time" elapsed={60} />
        </Grid>
        <Grid item xs={12}>
          <ClockDisplay title="Remaining Time" elapsed={7853} />
        </Grid>
        
        <Paper>
          <p>Test three</p>
        </Paper>
      </Grid>
      
    </div>
  )
}
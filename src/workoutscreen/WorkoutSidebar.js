import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ClockDisplay from './ClockDisplay'
import {  Typography } from '@material-ui/core';
import TaskList from './TaskList';

const useStyles = makeStyles((theme) => ({
  fillSurroundings: {
    height: '100%',
    maxHeight: '100%',
  },
  itemtext: {
    textAlign: 'center'
  },
  secondaryBg: {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.secondary
  },
  scroll: {
    position: 'relative',
    overflow: 'auto',
  }
}))



export default function WorkoutSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.fillSurroundings}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ClockDisplay title="Elapsed Time" elapsed={props.elapsed} />
        </Grid>
        <Grid item xs={12}>
          <ClockDisplay title="Remaining Time" elapsed={props.remaining} />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h3" className={classes.itemtext}>
            Program
            </Typography>
            <TaskList program={props.program} />
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  )
}
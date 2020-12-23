import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ClockDisplay from './ClockDisplay'
import {  Box, Typography } from '@material-ui/core';
import TaskList from './TaskList';

const useStyles = makeStyles((theme) => ({
  fillSurroundings: {
    height: '100vh',
    maxHeight: '100vh',
  },
  itemtext: {
    textAlign: 'center'
  },
  secondaryBg: {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.secondary
  },
  scroll: {
    overflowY: 'scroll',
  }
}))



export default function WorkoutSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.fillSurroundings}>
      <Grid 
        container 
        spacing={2}
        justify="flex-start"
        alignItems="stretch">
        <Grid item xs={12}>
          <ClockDisplay title="Elapsed Time" elapsed={props.elapsed} />
        </Grid>
        <Grid item xs={12}>
          <ClockDisplay title="Remaining Time" elapsed={props.remaining} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.itemtext}>
          Program
          </Typography>
          <div className={classes.scroll}>
            <TaskList program={props.program}/>
          </div>
        </Grid>
      </Grid>
      
    </div>
  )
}
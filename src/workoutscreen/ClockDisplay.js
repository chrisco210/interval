import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    color: theme.palette.text.secondary,
  }
}));

export default function ClockDisplay(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.title}>
        {props.title}
      </Typography>
      <Typography variant="h3">
        {stringOfElapsed(props.elapsed)}
      </Typography>
    </Paper>
  )
}

function stringOfElapsed(elapsed) {
  const seconds = elapsed % 60;
  const minutes = (Math.floor(elapsed / 60)) % 60;
  const hours = (Math.floor(elapsed / (60 * 60))) % 60;

  return (hours < 10 ? '0' : '') + hours 
    + ':' + (minutes < 10 ? '0' : '') + minutes + ':' 
    + (seconds < 10 ? '0' : '') + seconds;
}
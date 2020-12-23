import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ClockTypography from './ClockTypography';

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
      <ClockTypography {...props} />
    </Paper>
  )
}

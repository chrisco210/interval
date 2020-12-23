import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import ClockDisplay from './ClockDisplay'

const useStyles = makeStyles((theme) => ({
  fillSurroundings: {
    height: '100%',
    width: '100%'
  },
  itemtext: {
    textAlign: 'center'
  },
}))

export default function ActiveDisplay(props) {
  const classes = useStyles();

  return (
    <div className={classes.fillSurroundings}>
      <Grid className={classes.fillSurroundings} container spacing={3} direction="column" justify="space-between">
        <Grid container item direction="row" justify="space-between">
          <Grid item>
            <Typography variant="h4">
              Current Intensity: {props.currentIntensity}%
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              Next Task: {props.nextTask}
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.itemtext}>
          <Typography variant="h1">
            {props.currentTask}
          </Typography>
          <Typography variant="h3">
            {props.currentIntensity}%
          </Typography>
          <ClockDisplay elapsed={props.remaining} variant="h1"/>
        </Grid>
        <Grid item container direction="row" justify="flex-end" spacing={3}>
          <Grid item>
            <Button size="large" variant="contained" color="primary">Pause</Button>
          </Grid>
          <Grid item>
            <Button size="large" variant="contained" color="secondary">End</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
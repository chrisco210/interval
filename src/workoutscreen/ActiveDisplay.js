import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import ClockTypography from './ClockTypography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  fillSurroundings: {
    height: '100%',
    width: '100%'
  },
  itemtext: {
    textAlign: 'center'
  },
  graytext: {
    color: theme.palette.text.secondary,
  }
}))

export default function ActiveDisplay(props) {
  const classes = useStyles();

  return (
    <div className={classes.fillSurroundings}>
      <Grid className={classes.fillSurroundings} container spacing={3} direction="column" justify="space-between">
        <Grid container item direction="row" justify="flex-end">
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
          <Typography variant="h3" className={classes.graytext}>
            {props.currentIntensity ? props.currentIntensity + '%' : ''}
          </Typography>
          <ClockTypography elapsed={props.remaining} variant="h1"/>
        </Grid>
        <Grid item container direction="row" justify="flex-end" spacing={3}>
          <Grid item>
            <Button 
              size="large" 
              component={RouterLink} to="/pause"
              variant="contained" 
              color="primary" 
              onClick={() => props.onPause()}>
              Pause
            </Button>
          </Grid>
          <Grid item>
            <Button 
              size="large" 
              component={RouterLink} to="/done"
              variant="contained" 
              color="secondary"
              onClick={() => props.onEnd()}>End</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
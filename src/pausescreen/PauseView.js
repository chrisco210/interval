import { Button, Divider, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ClockTypography from '../workoutscreen/ClockTypography';
import { Link as RouterLink } from 'react-router-dom';

const styles = makeStyles((theme) => ({
  fullHeight: {
    minHeight: '100vh',
    height: '100vh',
    maxHeight: '100vh',
  },
  fillSurroundings: {
    height: '100%',
    width: '100%'
  },
  itemtext: {
    textAlign: 'center'
  },
}));

export default function PauseView(props) {
  const classes = styles();

  return (
  <div className={classes.fullHeight}>
    <Grid container 
      spacing={3} 
      alignItems="center" 
      justify="center"
      className={classes.fillSurroundings}
      direction="column">
      <Grid item >
        <Typography variant="h1" className={styles.itemtext}>Paused</Typography>
      </Grid>
      <Divider />
      <Grid item 
        container 
        spacing={3}
        justify="center"
        alignItems="center"
        direction="row">
        <Grid item >
          <Typography variant="h5">Elapsed Time:</Typography>
        </Grid>
        <Grid item>
          <ClockTypography variant="h5" elapsed={props.elapsed} />
        </Grid>
      </Grid>
      <Grid item 
        container 
        spacing={3}
        justify="center"
        alignItems="center"
        direction="row">
        <Grid item >
          <Typography variant="h5">Current Task:</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">{props.currentTask.task}</Typography>
        </Grid>
      </Grid>
      <Grid item 
        container 
        spacing={3}
        justify="center"
        alignItems="center"
        direction="row">
        <Grid item >
          <Button 
            component={RouterLink} to="/"
            variant="contained" 
            size="large" 
            onClick={() => props.onResume()}
            color="primary">Resume</Button>
        </Grid>
        <Grid item>
          <Button 
            variant="contained" 
            size="large"
            color="secondary">End</Button>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}
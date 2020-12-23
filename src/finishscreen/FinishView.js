import { Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ClockTypography from '../workoutscreen/ClockTypography';
import { Link as RouterLink } from 'react-router-dom';
import TaskList from '../workoutscreen/TaskList';

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

export default function FinishView(props) {
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
        <Typography variant="h1" className={styles.itemtext}>Finished</Typography>
      </Grid>
      <Grid item>
        <TaskList program={props.program} />
      </Grid>
      <Grid item>
        <Typography variant="h3" className={styles.itemtext}>Total Time</Typography>
      </Grid>
      <Grid item>
        <ClockTypography elapsed={props.elapsed}/>
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
            onClick={() => props.onRestart()}
            variant="contained" 
            size="large" 
            color="primary">Restart</Button>
        </Grid>
        <Grid item>
          <Button 
            component={RouterLink} to="/setup"
            onClick={() => props.onEnd()}
            variant="contained" 
            size="large"
            color="secondary">New Program</Button>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}
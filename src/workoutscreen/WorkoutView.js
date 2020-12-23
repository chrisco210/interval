import React from 'react'
import Grid from '@material-ui/core/Grid';
import WorkoutSidebar from './WorkoutSidebar'
import ActiveDisplay from './ActiveDisplay'
import { withStyles } from "@material-ui/core/styles";

const TEMP_MOCK = [
  {task: "task 1", duration: 1, intensity: 1},
  {task: "task 2", duration: 1, intensity: 1},
  {task: "task 3", duration: 1, intensity: 1},
  {task: "task 4", duration: 1, intensity: 1},
  {task: "task 5", duration: 1, intensity: 1},
  {task: "task 6", duration: 1, intensity: 1},
  {task: "task 7", duration: 1, intensity: 1},
  
]

const styles = (theme) => ({
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
});


class WorkoutView extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.fullHeight}>
        <Grid container spacing={3} className={classes.fillSurroundings}>
          <Grid item xs={12} md={3}>
            <WorkoutSidebar program={TEMP_MOCK}/>
          </Grid>
          <Grid item xs={12} md={9}>
            <ActiveDisplay 
              currentTask="TASK"
              nextTask="NEXT TASK"
              currentIntensity="50"
              remaining={150}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(WorkoutView)
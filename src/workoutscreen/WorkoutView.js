import React from 'react'
import Grid from '@material-ui/core/Grid';
import WorkoutSidebar from './WorkoutSidebar'
import ActiveDisplay from './ActiveDisplay'
import { withStyles } from "@material-ui/core/styles";

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
    const current = this.props.program[this.props.current];
    let next;
    if(this.props.current < this.props.program.length - 1) {
      next = this.props.program[this.props.current + 1].task;
    } else {
      next = 'Done!';
    }
    
    return (
      <div className={classes.fullHeight}>
        <Grid container spacing={3} className={classes.fillSurroundings}>
          <Grid item xs={12} md={3}>
            <WorkoutSidebar 
              program={this.props.program}
              remaining={this.props.total - this.props.elapsed}
              elapsed={this.props.elapsed}/>
          </Grid>
          <Grid item xs={12} md={9}>
            <ActiveDisplay 
              currentTask={current.task}
              nextTask={next}
              currentIntensity={current.intensity}
              onPause={() => this.props.onPause()}
              remaining={this.props.remaining}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default withStyles(styles, {withTheme: true})(WorkoutView)
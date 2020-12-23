import React from 'react'
import SetupView from './setupscreen/SetupView'
import WorkoutView from './workoutscreen/WorkoutView'

import workoutpresets from './setupscreen/workoutpresets'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      program: [],
      currentTask: null,
      elapsed: 0,
      running: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) => {
      console.log('tick elapsed ' + state.elapsed)
      if(state.running) {
        return {elapsed: state.elapsed + 1}
      } else {
        return {}
      }
    })
  }


  render() {
    return (
        <Router>
          <Switch>
            <Route path="/setup">
              <SetupView presets={workoutpresets}/>
            </Route>
            <Route path={['/', '/active']}>
              <WorkoutView 
                elapsed={this.state.elapsed}
                program={this.state.program}/>
            </Route>
            <Route path="/pause">
              <p>Paused</p>
            </Route>
            <Route path="/done">
              <p>Finished</p>
            </Route>
          </Switch>
        </Router>
      );
  }
}

export default App;

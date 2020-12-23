import React from 'react'
import SetupView from './setupscreen/SetupView'
import WorkoutView from './workoutscreen/WorkoutView'
import PauseView from './pausescreen/PauseView'

import workoutpresets from './setupscreen/workoutpresets'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const TEMP_MOCK = [
  {task: "task 1", duration: 5, intensity: 1},
  {task: "task 2", duration: 5, intensity: 1},
  {task: "task 3", duration: 5, intensity: 1},
  {task: "task 4", duration: 5, intensity: 1},
  {task: "task 5", duration: 5, intensity: 1},
  {task: "task 6", duration: 5, intensity: 1},
  {task: "task 7", duration: 5, intensity: 1},
  
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      program: [],
      elapsed: 0,
      current: 0,
      running: false
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

  handleNewProgram(newProgram) {
    this.setState({program: newProgram});
  }

  handlePause() {
    this.setState({running: false})
  }

  tick() {
    this.setState((state, props) => {
      const retObj = {}
      console.log('tick elapsed ' + state.elapsed)
      if(state.running && state.elapsed < computeTotalTime(this.state.program)) {
        retObj.elapsed = state.elapsed + 1;

        const currentEndpoint = getCurrentEndpoint(state);
        console.log(`Current endpoint at tick ${state.elapsed}: ${currentEndpoint}`)
        if(state.elapsed >= currentEndpoint) {
          retObj.current = state.current + 1;
        }
      } 

      return retObj;
    });
  }

  render() {
    let workoutPage;

    if(this.state.program.length === 0) {
      workoutPage = <Redirect to="/setup"/>;
    } else if(!this.state.running) {
      workoutPage = <Redirect to="/pause" />;
    } else {
      workoutPage = (<WorkoutView 
                elapsed={this.state.elapsed}
                program={this.state.program}
                current={this.state.current}
                remaining={getCurrentEndpoint(this.state) - this.state.elapsed}
                total={computeTotalTime(this.state.program)}
                onPause={() => this.handlePause()}/>)
    }

    return (
        <Router>
          <Switch>
            <Route path="/setup">
              <SetupView 
                presets={workoutpresets} 
                onNewProgram={p => this.handleNewProgram(p)}
                onStart={() => this.setState({running: true})}
                program={this.state.program}/>
            </Route>
            <Route path={['/', '/active']} children={workoutPage} />
            <Route path="/pause">
              <PauseView />
            </Route>
            <Route path="/done">
              <p>Finished</p>
            </Route>
          </Switch>
        </Router>
      );
  }
}

function getCurrentEndpoint(state) {
  return state.program
    .slice(0, state.current + 1)
    .map((elt) => elt.duration)
    .reduce(((acc, cur) => cur + acc), 0);
}

function computeTotalTime(program) {
  return program.reduce(((acc, cur) => acc + cur.duration), 0);
}

export default App;

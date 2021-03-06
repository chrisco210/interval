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
import FinishView from './finishscreen/FinishView'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      program: [],
      lastElapsed: 0,
      elapsed: 0,
      current: 0,
      running: false,
      done: false,
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
    console.log(`Updating new program: ${JSON.stringify(newProgram)}`)
    this.setState({program: newProgram});
  }

  handlePause() {
    this.setState({running: false});
  }

  handleResume() {
    this.setState({running: true});
  }

  handleEnd() {
    this.setState((state, props) => ({
      elapsed: 0,
      current: 0,
      running: false,
      done: true,
      lastElapsed: state.elapsed
    }))
  }

  handleStart() {
    if(this.state.program.length !== 0) {
      this.setState({running: true, done: false})
    }
  }

  handleRestart() {
    this.setState({running: true, done: false, current: 0, elapsed: 0});
  }

  tick() {
    this.setState((state, props) => {
      const retObj = {}
      if(state.elapsed < computeTotalTime(this.state.program)) {
        if(state.running) {
          retObj.elapsed = state.elapsed + 1;
        }

        const currentEndpoint = getCurrentEndpoint(state);
        if(state.elapsed >= currentEndpoint) {
          retObj.current = state.current + 1;
        }
      } else {
        retObj.lastElapsed = state.elapsed;
        retObj.done = true;
      }

      return retObj;
    });
  }

  render() {
    let workoutPage;

    if(this.state.program.length === 0) {
      workoutPage = <Redirect to="/setup"/>;
    } else if (this.state.done) {
      workoutPage = <Redirect to="/done" />;
    } else {
      workoutPage = (<WorkoutView 
                elapsed={this.state.elapsed}
                program={this.state.program}
                current={this.state.current}
                remaining={getCurrentEndpoint(this.state) - this.state.elapsed}
                total={computeTotalTime(this.state.program)}
                onPause={() => this.handlePause()}
                onEnd={() => this.handleEnd()}/>)
    }

    return (
        <Router>
          <Switch>
            <Route path="/setup">
              <SetupView 
                presets={workoutpresets} 
                onNewProgram={p => this.handleNewProgram(p)}
                onStart={() => this.handleStart()}
                program={this.state.program}/>
            </Route>
            <Route path="/pause">
              <PauseView 
                currentTask={this.state.program[this.state.current]}
                elapsed={this.state.elapsed}
                onResume={() => this.handleResume()}
                onEnd={() => this.handleEnd()}/>
            </Route>
            <Route path="/done">
              <FinishView 
                program={this.state.program} 
                elapsed={this.state.lastElapsed}
                onEnd={() => this.handleEnd()}
                onRestart={() => this.handleRestart()}/>
            </Route>
            <Route path={['/', '/active']} children={workoutPage} />
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

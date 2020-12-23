import SetupView from './setupscreen/SetupView'
import WorkoutView from './workoutscreen/WorkoutView'

import workoutpresets from './setupscreen/workoutpresets'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/setup">
          <SetupView presets={workoutpresets}/>
        </Route>
        <Route path="/">
          <WorkoutView />
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

export default App;

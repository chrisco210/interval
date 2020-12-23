import SetupView from './setupscreen/SetupView'

import workoutpresets from './setupscreen/workoutpresets'

function App() {
  return (
    <SetupView presets={workoutpresets}/>
  );
}

export default App;

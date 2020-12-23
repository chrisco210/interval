import React from 'react';
import AddTaskForm from './AddTaskForm';
import AddTaskUnselected from './AddTaskUnselected';

class AddTaskButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoseAddTask: false,
      taskValid: false,
      intensityValid: false,
      durationValid: false,
      value: {
        task: null,
        intensity: null,
        duration: null,
      }
    }
  }

  updateFormField(field, val) {
    const u = Object.assign({}, this.state);
    u.value[field] = val;
    this.setState(u);
  }

  validateTask(task) {
    if(typeof this.state.value.task == "string" && this.state.value.task !== '') {
      return true;
    }
    return false;
  }

  validateIntensity() {
    if(isNumeric(this.state.value.intensity)) {
      const parsed = parseFloat(this.state.value.intensity);
      if(parsed >= 0 && parsed <= 100) {
        return true;
      }
    }
    return false;
  }

  validateDuration() {
    if(isNumeric(this.state.value.duration)) {
      const parsed = parseFloat(this.state.value.duration);
      if(parsed > 0) {
        return true;
      }
    }
    return false;
  }

  handleSubmit() {
    let subObj = Object.assign({}, this.state.value)
    subObj.duration = Math.floor(parseInt(subObj.duration));
    subObj.intensity = Math.floor(parseInt(subObj.intensity));
    subObj.key = Math.random() * 1000000;

    this.setState({
      value: {
        task: null,
        intensity: null,
        duration: null
      },
      userChoseAddTask: false,
      taksValid: false,
      intensityValid: false,
      durationValid: false
    });

    this.props.onSubmit(subObj);
  }

  render() {
    if(this.state.userChoseAddTask) {
      return <AddTaskForm 
        onUpdate={(f, v) => {this.updateFormField(f, v)}}
        onSubmit={() => this.handleSubmit()}
        fieldsValid={
          {
            task: this.validateTask(),
            duration: this.validateDuration(),
            intensity: this.validateIntensity()
          }
        }/>
    } else {
      return <AddTaskUnselected onClick={() => {
        this.setState({userChoseAddTask: true})
      }}/>
    }
  }
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export default AddTaskButton
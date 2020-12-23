import React from 'react';
import AddTaskForm from './AddTaskForm';
import AddTaskUnselected from './AddTaskUnselected';

class AddTaskButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoseAddTask: false
    }
  }

  render() {
    if(this.state.userChoseAddTask) {
      return <AddTaskForm />
    } else {
      return <AddTaskUnselected onClick={() => {
        this.setState({userChoseAddTask: true})
      }}/>
    }
  }
}

export default AddTaskButton
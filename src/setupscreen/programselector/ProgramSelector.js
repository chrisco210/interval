import React from 'react'
import ReorderableProgram from './ReorderableProgram'
import PresetSelector from '../presetselector/PresetSelector'
import AddTaskButton from "../addtask/AddTaskButton"
import List from '@material-ui/core/List';

// Has property {program : task list}

class ProgramSelector extends React.Component {
  render() {
    return (
      <div>
        <PresetSelector 
          selectPreset={(i) => this.props.onPresetSelect(i)} 
          presets={this.props.presets}/>
        <ReorderableProgram 
          program={this.props.program}
          onDragEnd={(r) => this.props.onDragEnd(r)}
          onDelete={(i) => {this.props.onDelete(i)}}
        />    
        <List>
          <AddTaskButton />
        </List>
      </div>
      
    )
  }
}

export default ProgramSelector
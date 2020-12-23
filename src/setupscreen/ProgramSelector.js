import React from 'react'
import ReorderableProgram from './ReorderableProgram'

// Has property {program : task list}

class ProgramSelector extends React.Component {
  render() {
    return (
      <div>
        <ReorderableProgram 
          program={this.props.program}
          onDragEnd={(r) => this.props.onDragEnd(r)}
          onDelete={(i) => {this.props.onDelete(i)}}
        />    
      </div>
      
    )
  }
}

export default ProgramSelector
import React from 'react'
import ReorderableProgram from './ReorderableProgram'

// Has property {program : task list}

class ProgramSelector extends React.Component {
  render() {
    return (
      <ReorderableProgram />
    )
  }
}

export default ProgramSelector
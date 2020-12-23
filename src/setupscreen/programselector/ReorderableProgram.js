import React from 'react'
import DraggableTask from './DraggableTask'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import List from '@material-ui/core/List';
import AddTaskButton from "../addtask/AddTaskButton"


// Has properties program and onDragEnd

class ReorderableProgram extends React.Component {
  render() {
    return (
      <div>
      <List component="nav">
        <DragDropContext onDragEnd={(r) => this.props.onDragEnd(r)}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                  {this.props.program.map((elt, index) => (
                    <DraggableTask 
                      key={elt.task}
                      task={elt.task}
                      intensity={elt.intensity}
                      duration={elt.duration}
                      index={index}
                      onDelete={() => this.props.onDelete(index)}
                      />
                  )
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        
      </List>
      </div>
    )
  }
}

export default ReorderableProgram
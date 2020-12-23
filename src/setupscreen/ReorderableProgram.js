import React from 'react'
import DraggableTask from './DraggableTask'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import List from '@material-ui/core/List';

// Has properties program and onDragEnd

class ReorderableProgram extends React.Component {
  render() {
    return (
      <DragDropContext onDragEnd={(r) => this.props.onDragEnd(r)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <List component="nav">
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
              </List>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default ReorderableProgram
import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorRounded from '@material-ui/icons/DragIndicatorRounded';
import ListItemIcon from '@material-ui/core/ListItemIcon'
// Has properties for a individual program element


class DraggableTask extends React.Component {
  render() {
    return (
        <Draggable 
          key={this.props.task}
          draggableId={this.props.task}
          index={this.props.index}>
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}>
                <ListItem divider>
                  <ListItemIcon>
                    <DragIndicatorRounded />
                  </ListItemIcon>
                  <ListItemText primary={`Task: ${this.props.task} Duration: ${this.props.duration} minutes Intensity: ${this.props.intensity}%`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => this.props.onDelete()}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </div>
          )}
        </Draggable>
    )
  }
}

export default DraggableTask
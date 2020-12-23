import { Box, Divider, List } from '@material-ui/core';
import TaskItem from '../setupscreen/programselector/TaskItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemtext: {
    textAlign: 'center'
  },

}))

export default function TaskList(props) {
  const classes = useStyles();

  return (
    <div >
      <List component="nav"  >
        {props.program.map((elt, index) => (
          <div key={elt.key}>
            <TaskItem
              textClasses={classes.itemtext}
              task={elt.task} 
              duration={elt.duration} 
              intensity={elt.intensity}/>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
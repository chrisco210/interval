import { Divider, List } from '@material-ui/core';
import TaskItem from '../setupscreen/programselector/TaskItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemtext: {
    textAlign: 'center'
  },
  scroll: {
    position: 'relative',
    overflow: 'auto',
  }
}))

export default function TaskList(props) {
  const classes = useStyles();

  return (
  <List component="nav" className={classes.scroll}>
    {props.program.map((elt, index) => (
      <div key={JSON.stringify(elt)}>
        <TaskItem
          textClasses={classes.itemtext}
          task={elt.task} 
          duration={elt.duration} 
          intensity={elt.intensity}/>
        <Divider />
      </div>
    ))}
  </List>);
}
import ListItemText from '@material-ui/core/ListItemText';

export default function TaskItem(props) {
  return (
      <ListItemText 
        className={props.textClasses}
        primary={
        <span>
          Task: {props.task} Duration: {props.duration}{' '} 
          minutes Intensity: {props.intensity}%
        </span>
      }/>
  );
}
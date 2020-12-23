import ListItemText from '@material-ui/core/ListItemText';

export default function TaskItem(props) {
  return (
      <ListItemText primary={`Task: ${props.task} Duration: ${props.duration} minutes Intensity: ${props.intensity}%`} />
  );
}
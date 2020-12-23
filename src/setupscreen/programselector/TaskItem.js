import ListItemText from '@material-ui/core/ListItemText';

function stringOfSeconds(elapsed) {
  const seconds = elapsed % 60;
  const minutes = (Math.floor(elapsed / 60)) % 60;
  const hours = (Math.floor(elapsed / (60 * 60))) % 60;

  return (hours < 10 ? '0' : '') + hours 
    + ':' + (minutes < 10 ? '0' : '') + minutes + ':' 
    + (seconds < 10 ? '0' : '') + seconds;
}

export default function TaskItem(props) {
  return (
      <ListItemText 
        className={props.textClasses}
        primary={
        <span>
          Task: {props.task} Duration: {stringOfSeconds(props.duration)}{' '} 
           Intensity: {props.intensity}%
        </span>
      }/>
  );
}
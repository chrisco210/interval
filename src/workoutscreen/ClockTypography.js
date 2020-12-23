import { Typography } from "@material-ui/core";

export default function ClockTypography(props) {
  return (
    <Typography variant={props.variant ? props.variant : 'h3'}>
        {stringOfElapsed(props.elapsed)}
      </Typography>
  )
} 

function stringOfElapsed(elapsed) {
  const seconds = elapsed % 60;
  const minutes = (Math.floor(elapsed / 60)) % 60;
  const hours = (Math.floor(elapsed / (60 * 60))) % 60;

  return (hours < 10 ? '0' : '') + hours 
    + ':' + (minutes < 10 ? '0' : '') + minutes + ':' 
    + (seconds < 10 ? '0' : '') + seconds;
}
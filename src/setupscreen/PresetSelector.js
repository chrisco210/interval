import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PresetItem from './PresetItem'

class PresetSelector extends React.Component {

  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }

  handleChange(e) {
    
  }

  render() {
    return (
      <FormControl>
        <Select native 
          onClick={(e) => this.props.selectPreset(e.target.value)}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper">
          {this.props.presets.map((elt, idx) => (
              <PresetItem key={elt.name} index={idx} name={elt.name} ref={this.wrapper}/>
            )
          )}
        </Select>
      </FormControl>
    )
  }
}

export default PresetSelector
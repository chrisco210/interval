import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';

class PresetItem extends React.Component {
  render() {
    return (
      <option value={this.props.index}>{this.props.name}</option>
    )
  }
}

export default PresetItem
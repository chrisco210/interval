import React from 'react'

class PresetItem extends React.Component {
  render() {
    return (
      <option value={this.props.index}>{this.props.name}</option>
    )
  }
}

export default PresetItem
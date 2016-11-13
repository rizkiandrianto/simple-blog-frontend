import React, { Component, PropTypes } from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FieldGroup extends Component{
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    help: PropTypes.string
  }
  render() {
    return (
      <FormGroup controlId={this.props.id}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...this.props} />
        {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
      </FormGroup>
    )
  }
}

export default FieldGroup;

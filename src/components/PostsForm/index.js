import React, { Component, PropTypes } from 'react';
import {FieldGroup} from 'components';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';


@connect(state => ({edit: state.edit}))

class PostForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    edit: PropTypes.object
  }
  constructor(props) {
    super(props);
    const {edit} = this.props;
    this.state = {
      "edit" : edit
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      edit: nextProps.edit
    })
  }
  render() {
    const {edit} = this.state;
    return (
      <form id={this.props.id}>
        <FieldGroup
          id="post_title"
          type="text"
          label="Title"
          name="title"
          defaultValue={edit.title}
          />
        <FormGroup controlId="post_content">
          <ControlLabel>Content</ControlLabel>
          <FormControl name="content" rows={10} componentClass="textarea" defaultValue={edit.content} />
        </FormGroup>
      </form>
    )
  }
}

export default PostForm;

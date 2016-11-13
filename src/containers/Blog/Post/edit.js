import React, { Component, PropTypes } from 'react';
import {PostForm} from 'components';
import Helmet from 'react-helmet';
import {Button} from 'react-bootstrap';
import serialize from 'form-serialize';
import req from 'jquery';
import config from 'config';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { load, isLoaded } from 'redux/modules/edit';
import { asyncConnect } from 'redux-connect';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    if (!isLoaded(getState())) {
      promises.push(dispatch(load()));
    }
    return Promise.all(promises);
  }
}])

@connect(
    state => ({edit_: state.edit}),
    dispatch => bindActionCreators({load}, dispatch))

class EditPost extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired,
    edit_: PropTypes.object
  }
  constructor(props){
    super(props);
    this.state = {
      title: "",
      content: ""
    }
  }
  savePost() {
    const form = document.querySelector('#form_edit');
    const data = serialize(form, {hash: true});
    req.ajax({
      "url": config.apiHost + ':' + config.apiPort + '/posts/' + this.props.params.id,
      "data": data,
      "type": "PUT"
    }).then((res)=>{
      browserHistory.push('/blog');
    }, (err)=> {
      alert(err);
    })
  }
  componentWillMount(){
    const {load} = this.props;
    load(this.props.params.id);
  }
  render() {
    const {edit_} = this.props;
    return (
      <div className="container">
        <h1>Edit Post</h1>
        <Helmet title="Add New Post" />
        <PostForm id="form_edit" edit={edit_} />
        <Button bsStyle="primary" onClick={this.savePost.bind(this)}>Save</Button>
      </div>
    )
  }
}

export default EditPost;

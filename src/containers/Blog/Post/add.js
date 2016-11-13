import React, { Component, PropTypes } from 'react';
import {PostForm} from 'components';
import Helmet from 'react-helmet';
import {Button} from 'react-bootstrap';
import serialize from 'form-serialize';
import req from 'jquery';
import config from 'config';
import {browserHistory} from 'react-router';
import {load} from 'redux/modules/edit';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(
    null,
    dispatch => bindActionCreators({load}, dispatch)
  )

class AddPost extends Component{
  static propTypes = {
    load: PropTypes.func
  }
  addPost() {
    const form = document.querySelector('#form_add');
    const data = serialize(form, {hash: true});
    req.ajax({
      "url": config.apiHost + ':' + config.apiPort + '/posts',
      "data": data,
      "type": "POST"
    }).then((res)=>{
      browserHistory.push('/blog')
    }, (err)=> {
      alert(err);
    })
  }
  componentWillMount(){
    this.props.load();
  }
  render() {
    return (
      <div className="container">
        <h1>Post Add</h1>
        <Helmet title="Add New Post" />
        <PostForm id="form_add" />
        <Button bsStyle="primary" onClick={this.addPost.bind(this)}>Add</Button>
      </div>
    )
  }
}

export default AddPost;

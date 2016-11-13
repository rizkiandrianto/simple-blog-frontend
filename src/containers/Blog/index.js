import React, { Component } from 'react';
import Helmet from 'react-helmet';
import req from 'superagent';
import config from 'config';
import PostList from './Post/list';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class Blog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list : []
    };
  }
  componentDidMount() {
    this.callData();
  }
  callData() {
    req.get(config.apiHost + ':' + config.apiPort + '/posts').end((err, res)=>{
      this.setState({
        list: res.body
      })
    });
  }
  render() {
    const {list} = this.state
    return (
      <div className="container">
        <h1>
          Blog
          <Button bsStyle="primary" onClick={()=>{ browserHistory.push('/posts-add') }}>Add New</Button>
        </h1>
        <Helmet title="Blog Posts List" />
        <PostList data={this.state.list} />
      </div>
    );
  }
}

export default Blog;

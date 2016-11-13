import React, { Component, PropTypes } from 'react';
import req from 'superagent';
import config from 'config';

class PostDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      title: "",
      content: ""
    }
  }
  call_data(){
    req.get(config.apiHost + ':' + config.apiPort + '/posts/' + this.props.params.id).end((err, res)=>{
      this.setState({
        title: res.body[0].title,
        content: res.body[0].content
      })
    })
  }
  componentDidMount(){
    this.call_data();
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <p>{this.state.content || 'loading'}</p>
      </div>
    )
  }
}

export default PostDetail;

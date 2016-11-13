import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getID} from 'redux/modules/edit';
import req from 'jquery';
import config from 'config';

@connect(null,
    dispatch => bindActionCreators({getID}, dispatch))

class ListItem extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    getID: PropTypes.func
  }

  detail(id) {
    browserHistory.push('/posts/' + id)
  }

  edit(e, id) {
    e.stopPropagation();
    this.props.getID(this.props.id);
    browserHistory.push('/posts-edit/' + id)
  }

  delete(e, id) {
    e.stopPropagation();
    req.ajax({
      "url" : config.apiHost + ':' + config.apiPort + '/posts/' + this.props.id,
      "type": "DELETE"
    }).then((res)=>{
      location.reload();
    }, (err) => {
      alert('error')
    })
  }

  render() {
    return (
      <div key={this.props.id} onClick={this.detail.bind(this, this.props.id)} href="#" className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.title} | <a onClick={(e)=>{ this.edit(e, this.props.id) }}>Edit</a> - <a onClick={(e)=>{ this.delete(e, this.props.id) }}>Delete</a></h4>
        <p className="list-group-item-text">{this.props.content}</p>
      </div>
    )
  }
}

export default ListItem;

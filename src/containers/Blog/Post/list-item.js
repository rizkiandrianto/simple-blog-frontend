import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';

class ListItem extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  detail(id) {
    browserHistory.push('/posts/' + id)
  }

  edit(e, id) {
    e.stopPropagation();
    browserHistory.push('/posts-edit/' + id)
  }

  render() {
    return (
      <div key={this.props.id} onClick={this.detail.bind(this, this.props.id)} href="#" className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.title} | <a onClick={(e)=>{ this.edit(e, this.props.id) }}>Edit</a> - <a>Delete</a></h4>
        <p className="list-group-item-text">{this.props.content}</p>
      </div>
    )
  }
}

export default ListItem;

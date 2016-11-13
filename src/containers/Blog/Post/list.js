import React, { Component, PropTypes } from 'react';
import ListItem from './list-item';

class PostLists extends Component{
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    const {data} = this.props
    return (
      <div className="list-group">
        {
          data.map((key, index)=>{
            return (
              <ListItem key={key._id} id={key._id} title={key.title} content={key.content} />
            )
          })
        }
      </div>
    )
  }
}

export default PostLists;

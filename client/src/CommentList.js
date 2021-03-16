import React from 'react';
import axios from 'axios';

export default ({ comments }) => {

  const renderedComments = comments.map(comment => {
    let content, style
    switch (comment.status){
      case 'approved':
        style = {}
        content = comment.content
        break
      case 'rejected':
        style = { color: 'red'}
        content = 'This comment is rejected'
        break
      default:
        style = { color: 'grey'}
        content = 'This comment is awaiting moderation'
    }

    return <li key={comment.id} style={style}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

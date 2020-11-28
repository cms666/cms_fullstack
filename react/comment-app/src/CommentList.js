import React,{Component, component} from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentList extends Component{
  render(){
    return (
      <div>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    )
  }
}

export default CommentList
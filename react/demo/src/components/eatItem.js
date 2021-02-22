import React, { Component } from 'react';
class EatItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {  }
  handleClick(){
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
    this.props.list = []
  }
  render() { 
    return ( 
      <li onClick={this.handleClick}>{this.props.content}</li>
     );
  }
}
 
export default EatItem;
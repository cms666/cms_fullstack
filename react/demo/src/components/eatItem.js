import React, { Component } from "react";
class EatItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {};
  handleClick() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
    this.props.list = [];
  }
  componentWillMount() {
    //只在页面刷新的时候执行一次
    console.log("componentWillMount组件将要挂载");
  }
  componentDidMount() {
    //只在页面刷新的时候执行一次
    console.log("componentDidMount组件挂载完成");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate组件发生改变之前");
    // console.log(nextProps);
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  componentWillUpdate() {
    console.log("componentWillUpdate组件更新之前");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate组件更新完成");
  }
  render() {
    console.log("组件挂载中");

    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
}

export default EatItem;

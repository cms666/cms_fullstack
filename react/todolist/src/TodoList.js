import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputd">dianji</label>
          <input
            id="inputd"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          ></input>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return <TodoItem item={item} key={index} index={index} deleteItem={this.handleDelete.bind(this)}/>;

            /* <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>*/
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}

export default TodoList;

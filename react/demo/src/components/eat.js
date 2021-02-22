import react, { Component, Fragment } from "react";
import "../style/eat.css";
import PropTypes from 'prop-types'
import EatItem from "./eatItem";
class Eat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      list: ["宫保鸡丁", "肥肠"],
    };
  }

  inputChange(e) {
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value,
    });
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
    });
  }
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list,
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* <label for="addGoods">加菜</label> */}
          <input
            id="addGoods"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          ></input>
          <button onClick={this.addList.bind(this)}>下单</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            {
              /*return <li key={index+item} onClick={this.deleteItem.bind(this,index)}>{item}</li>*/
            }
            return (
              <EatItem
                content={item}
                deleteItem={this.deleteItem.bind(this)}
                index={index}
                key={index + item}
                list={this.state.list}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Eat;

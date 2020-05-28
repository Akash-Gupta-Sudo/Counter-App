import React, { Component } from "react";

export default class Counters extends Component {
  //formatCount specify in which format the value result has to be displayed
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
  // render method contain the structure of items
  render() {
    console.log("counter render");
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary mx-3 my-2"
          style={{ width: 75 }}
        >
          {this.formatCount()}
        </button>
        <button
          id={this.props.counter.id} //works as index position to fetch the correct item
          type="button"
          className="btn btn-warning mx-3 my-2 fas fa-plus"
          onClick={this.props.onIncrement}
        ></button>
        <button
          id={this.props.counter.id} //works as index position to fetch the correct item
          type="button"
          className="btn btn-info mx-3 my-2 fas fa-minus"
          onClick={this.props.onDecrement}
        ></button>
        <button
          id={this.props.counter.id} //works as index position to fetch the correct item
          type="button"
          className="btn btn-danger mx-3 my-2 fas fa-times "
          onClick={this.props.handleRemove}
        ></button>
      </div>
    );
  }
}

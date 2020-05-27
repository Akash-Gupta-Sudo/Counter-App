import React, { Component } from "react";

export default class Counters extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
  render() {
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
          id={this.props.index}
          type="button"
          className="btn btn-warning mx-3 my-2"
          onClick={this.props.onIncrement}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          id={this.props.index}
          type="button"
          className="btn btn-info mx-3 my-2 "
          onClick={this.props.onDecrement}
        >
          <i className="fas fa-minus"></i>
        </button>
        <button
          id={this.props.index}
          type="button"
          className="btn btn-danger mx-3 my-2 "
          onClick={this.props.handleRemove}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }
}

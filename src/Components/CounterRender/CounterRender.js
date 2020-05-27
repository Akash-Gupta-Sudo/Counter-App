import React, { Component } from "react";
import Counters from "../Counters/Counters";
export default class CounterRender extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark mx-3 my-2"
          onClick={this.props.handleRefresh}
        >
          <i className="fas fa-redo-alt"></i>
        </button>
        <button type="button" className="btn btn-dark mx-3 my-2">
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        {this.props.counters.map((counter) => {
          return (
            <Counters
              index={counter.id}
              counter={counter}
              key={counter.id}
              value={counter.value}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              handleRemove={this.props.handleRemove}
            />
          );
        })}
      </div>
    );
  }
}

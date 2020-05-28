import React, { Component } from "react";
import Counters from "../Counters/Counters";
export default class CounterRender extends Component {
  //this render() methods renders the total items
  render() {
    console.log("counterRender render");
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark mx-3 my-2 fas fa-redo-alt "
          onClick={this.props.handleRefresh}
        ></button>

        {this.props.counters.map((counter) => {
          return (
            <Counters
              counter={counter}
              key={counter.id}
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

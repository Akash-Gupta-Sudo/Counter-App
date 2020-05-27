import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import CounterRender from "../CounterRender/CounterRender";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
      ],
      totalItemsCount: 4,
    };
  }
  onIncrement = (e) => {
    let countIncrement = this.state.counters.map((counter) => {
      if (counter.id === +e.target.id) {
        counter.value = counter.value + 1;
      }
      return counter;
    });

    this.setState({ counters: countIncrement });
  };

  onDecrement = (e) => {
    let countDecrement = this.state.counters.map((counter) => {
      if (counter.id === +e.target.id && counter.value > 0) {
        counter.value = counter.value - 1;
      }
      return counter;
    });
    console.log(countDecrement);

    this.setState({ counters: countDecrement });
  };
  handleRefresh = () => {
    let refresh = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: refresh });
  };
  handleRemove = (e) => {
    let totalItems = this.state.counters.filter((counter) => {
      if (counter.id !== +e.target.id) {
        return counter;
      }
      return null;
    });

    this.setState({ counters: totalItems, totalItemsCount: totalItems.length });
  };
  addMoreItems = () => {
    let getLastElementIndex = this.state.counters.length - 1;
    let newItem = {
      id: this.state.counters[getLastElementIndex].id + 1,
      value: 0,
    };

    this.state.counters.push(newItem);

    this.setState({
      counters: this.state.counters,
      totalItemsCount: this.state.counters.length,
    });
  };
  render() {
    console.log(this.state.counters);
    return (
      <>
        <Navbar
          totalItemsCount={this.state.totalItemsCount}
          addMoreItems={this.addMoreItems}
        />
        <CounterRender
          counters={this.state.counters}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          handleRefresh={this.handleRefresh}
          handleRemove={this.handleRemove}
        />
      </>
    );
  }
}

export default App;

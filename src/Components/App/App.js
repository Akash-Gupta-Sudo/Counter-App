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
      totalItemsCount: 4, //counts the total no of items present
    };
  }
  //Handles the Increment of the Value
  onIncrement = (e) => {
    let countIncrement = this.state.counters.map((counter) => {
      if (counter.id === +e.target.id) {
        counter.value = counter.value + 1;
      }
      return counter;
    });

    this.setState({ counters: countIncrement });
  };
  //Handles the Decrement of the Value
  onDecrement = (e) => {
    let countDecrement = this.state.counters.map((counter) => {
      if (counter.id === +e.target.id && counter.value > 0) {
        counter.value = counter.value - 1;
      }
      return counter;
    });

    this.setState({ counters: countDecrement });
  };
  //Initial all the values back to zero
  handleRefresh = () => {
    let refresh = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: refresh });
  };
  //removes a item from the dom
  handleRemove = (e) => {
    let totalItems = this.state.counters.filter((counter) => {
      if (counter.id !== +e.target.id) {
        return counter;
      }
      return null;
    });

    this.setState({ counters: totalItems, totalItemsCount: totalItems.length });
  };
  //Adds a item to the DOM
  addMoreItems = () => {
    if (this.state.counters.length !== 0) {
      let getLastElementIndex = this.state.counters.length - 1;
      let newItem = {
        id: this.state.counters[getLastElementIndex].id + 1,
        value: 0,
      };

      this.state.counters.push(newItem);
    } else {
      this.state.counters.push({ id: 0, value: 0 });
    }
    this.setState({
      counters: this.state.counters,
      totalItemsCount: this.state.counters.length,
    });
  };
  render() {
    console.log("App render");
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

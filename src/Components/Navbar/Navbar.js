import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    console.log("Navbar render");
    return (
      <div>
        <nav className="nav bg-light ">
          <i
            className="fa fa-shopping-cart fa-lg m-2 align-self-center mr-2 my-2 ml-3"
            aria-hidden="true"
          />

          <span className="btn btn-primary align-self-center rounded-pill mx-2 my-2">
            {this.props.totalItemsCount} Items
          </span>
          <span
            className="btn btn-success align-self-center rounded-pill mx-2 my-2"
            onClick={this.props.addMoreItems}
          >
            Add Item
          </span>
        </nav>
      </div>
    );
  }
}

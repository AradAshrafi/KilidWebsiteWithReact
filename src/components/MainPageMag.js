import React, { Component } from "react";

export default class MainPageMag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.mag
    };
  }

  render() {
    return (
      <a href={this.state.id}>
        <img src={this.state.image} alt={this.state.id} />
        <span>{this.state.title.slice(0, 25)}...</span>
      </a>
    );
  }
}

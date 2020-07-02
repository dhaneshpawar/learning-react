import React, { Component } from "react";

class Counter extends Component {
  state = {
    Counter: 1,
    imageUrl: "https://picsum.photos/100",
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">click me</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.Counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { Counter } = this.state;
    return Counter === 0 ? "ZERO" : Counter;
  }
}

export default Counter;
import React, { Component } from "react";

export class CountWords extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Words: </strong>{this.props.text.trim().split(/\s+/).length}
          <br />
          <strong>Characters: </strong>{this.props.text.replace(/ /g,"").length}
        </p>
      </div>
    );
  }
}

export default CountWords;

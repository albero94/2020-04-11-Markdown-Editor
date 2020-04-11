import React, { Component } from "react";
import Markdown from "react-markdown-it";

export class PreviewPanel extends Component {
  render() {
    return (
      <div style={this.style}>
          <Markdown source={this.props.text} />
      </div>
    );
  }

  style = {
        background: "#eee",
        height: '60vh',
        marginTop: '0px',
        padding: '0px 5px',
        border: 'solid 1px'
  }
}

export default PreviewPanel;

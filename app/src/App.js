import React from "react";
import "./App.css";
import Markdown from "react-markdown-it";
import MarkdownPanel from "./Components/MarkdownPanel";
import PreviewPanel from "./Components/PreviewPanel";
import Header from "./layout/Header";
import CountWords from "./Components/CountWords";

class App extends React.Component {
  state = {
    text: `### Write your text here!`,
  };

  textChanged = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <CountWords text={this.state.text}/>
        <div className="row">
          <div className="column">
            <MarkdownPanel
              text={this.state.text}
              textChanged={this.textChanged}
            />
          </div>
          <div className="column">
            <PreviewPanel text={this.state.text} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

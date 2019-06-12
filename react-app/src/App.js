import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    // 해당 컴포넌트가 실행되기 전에 초기화를 담당하는 부분
    this.state = {
      mode: "read",
      welcome: { title: "Welcome", desc: "Hello, React!! " },
      subject: { title: "WEB", sub: "world wide web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information." },
        { id: 2, title: "CSS", desc: "CSS is for design." },
        { id: 3, title: "JS", desc: "JS is for interactive." }
      ]
    };
  }
  render() {
    var _title = null;
    var _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        /> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function(e) {
                e.preventDefault();

                this.setState({ mode: "welcome" });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>

        <TOC data={this.state.contents} />
        <Content title={_title} sub={_desc} />
      </div>
    );
  }
}

export default App;

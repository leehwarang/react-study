import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Control from "./components/Control";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 0,
      subject: { title: "WEB", sub: "world wide web" },
      welcome: { title: "welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interaction" }
      ]
    };
  }

  searchTargetContent(arr) {
    let _index;
    arr.forEach((content, index) => {
      if (content.id === this.state.selectedContentId) {
        _index = index;
      }
    });
    return _index;
  }

  getContent() {
    const _contents = this.state.contents;
    const target = _contents.filter(
      content => content.id === this.state.selectedContentId
    );
    console.log(target);
    return target[0];
  }

  welcomeContent() {
    const _title = this.state.welcome.title;
    const _desc = this.state.welcome.desc;
    const _article = <ReadContent title={_title} sub={_desc} />;
    return _article;
  }

  readContent() {
    const data = this.getContent();
    const _article = <ReadContent title={data.title} sub={data.desc} />;
    return _article;
  }

  createContent() {
    const _article = (
      <CreateContent
        onSubmit={(_title, _desc) => {
          this.max_content_id += 1;
          this.state.contents.push({
            id: this.max_content_id,
            title: _title,
            desc: _desc
          });

          this.setState({
            contents: this.state.contents,
            mode: "read",
            selected_content_id: this.max_content_id
          });
        }}
      />
    );
    return _article;
  }

  updateContent() {
    const data = this.getContent();
    const _article = (
      <UpdateContent
        data={data}
        onSubmit={(_id, _title, _desc) => {
          const _contents = [...this.state.contents];
          for (let content of _contents) {
            if (content.id === _id) {
              content.id = _id;
              content.title = _title;
              content.desc = _desc;
            }
          }

          this.setState({ contents: _contents, mode: "read" });
        }}
      />
    );
    return _article;
  }

  deleteContent() {
    window.confirm("정말 삭제하시겠습니까?");
    const _contents = [...this.state.contents];
    const targetIndex = this.searchTargetContent(_contents);
    _contents.splice(targetIndex, 1);
    this.setState({ contents: _contents, mode: "welcome" });
  }

  getArticleContent() {
    let _article;

    // 객체 매핑으로 바꾸어보려고 했는데 알 수 없는 오류나서 잠시 보류

    if (this.state.mode === "welcome") {
      _article = this.welcomeContent();
    } else if (this.state.mode === "read") {
      _article = this.readContent();
    } else if (this.state.mode === "create") {
      _article = this.createContent();
    } else if (this.state.mode === "update") {
      _article = this.updateContent();
    }

    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({ mode: "welcome" });
          }}
        />

        <TOC
          data={this.state.contents}
          onChangePage={id => {
            this.setState({
              mode: "read",
              selectedContentId: Number(id)
            });
          }}
        />

        <Control
          onChangeMode={mode => {
            if (mode === "delete") {
              this.deleteContent();
            } else {
              this.setState({ mode: mode });
            }
          }}
        />

        {this.getArticleContent()}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class TOC extends Component {
  render() {
    var data = this.props.data;
    var list = [];
    for (var i = 0; i < data.length; i += 1) {
      list.push(
        <li key={data[i].id}>
          <a href={data[i].id}>{data[i].title}</a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;

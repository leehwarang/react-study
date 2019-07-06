import React, { Component } from "react";

class TOC extends Component {
  makeTocElement(el) {
    const newEl = (
      <li key={el.id}>
        <a
          href={el.id}
          onClick={function(id, e) {
            e.preventDefault();
            this.props.onChangePage(id);
          }.bind(this, el.id)} //bind에 두 번째 인자로 넘겨주는 것에 대해 이해하지 못해서 화살표 함수로 변경하지 않고 남겨둠
        >
          {el.title}
        </a>
      </li>
    );
    return newEl;
  }

  render() {
    console.log("TOC render");
    const data = this.props.data;
    let list = [];

    data.forEach(el => {
      list.push(this.makeTocElement(el));
    });

    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;

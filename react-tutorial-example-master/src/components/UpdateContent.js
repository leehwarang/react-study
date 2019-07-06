import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    };
  }

  inputformHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("UpdateContent render");
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }}
        >
          <div>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.inputformHandler.bind(this)}
            />
          </div>
          <div>
            <textarea
              placeholder="description"
              name="desc"
              value={this.state.desc}
              onChange={this.inputformHandler.bind(this)}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </article>
    );
  }
}

export default UpdateContent;

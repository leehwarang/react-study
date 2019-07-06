import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("CreateContent render");
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}
        >
          <div>
            <input type="text" placeholder="title" name="title" />
          </div>
          <div>
            <textarea placeholder="description" name="desc" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </article>
    );
  }
}

export default CreateContent;

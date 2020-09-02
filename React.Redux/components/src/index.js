import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Rom"
        timeAgo="Today ar 4:45PM"
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Katharina"
        timeAgo="Today ar 1:00AM"
        content="nice!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today ar 3:00PM"
        content="Nice blog post man!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

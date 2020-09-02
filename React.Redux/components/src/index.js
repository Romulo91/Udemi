import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import AppropvalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <AppropvalCard>
        <di>
          <h4>Warning!</h4>
          Are you sure you want todo this ?
        </di>
      </AppropvalCard>
      <AppropvalCard>
        <CommentDetail
          author="Rom"
          timeAgo="Today ar 4:45PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </AppropvalCard>
      <AppropvalCard>
        <CommentDetail
          author="Katharina"
          timeAgo="Today ar 1:00AM"
          content="nice!"
          avatar={faker.image.avatar()}
        />
      </AppropvalCard>
      <AppropvalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today ar 3:00PM"
          content="Nice blog post man!"
          avatar={faker.image.avatar()}
        />
      </AppropvalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

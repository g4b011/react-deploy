import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";

function Comments(props) {
  const { seshId } = props;
  const { user } = props;
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  let commentsJSX = [];
  comments.forEach(({ _id, text, username, media }) => {
    commentsJSX.push(
      <Comment key={_id} text={text} username={username} media={media} />
    );
  });

  return (
    <div className="bg-gray-300 p-2 flex flex-col space-y-2">
      {commentsJSX}
      {user ? <CommentAdd seshId={seshId} setComments={setComments} /> : null}
    </div>
  );
}

export default Comments;

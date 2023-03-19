import moment from "moment";
import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [allComments, setAllComments] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment !== "") {
      const newCommentObject = {
        name: "Alex",
        timestamp: Date.now(),
        comment: newComment
      };
      setAllComments([...allComments, newCommentObject]);
      setNewComment("");
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const Comments = allComments.map((object, index) => {
    return (
      <div key={index} className="comment__default">
        <div className="comment__image-container-one">
          <div className="comment__header--image-one"></div>
        </div>
        <div className="comment__header">
          <h2 className="comment__header--name">{object.name}</h2>
          <h3 className="comment__header--date">
            {moment(object.timestamp).format("MM/DD/YYYY")}
          </h3>
        </div>
        <div className="comment__text-container-default">
          <p className="comment__text-container-default--comment">
            {object.comment}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <main className="comment">
        <h1 className="comment__title">{allComments.length} Comments</h1>
        <div className="comment__name-container">
          <div className="comment__image"></div>
          <form className="comment__input-container" onSubmit={handleCommentSubmit}>
            <div className="comment__input-text-container">
              <h5 className="comment__input-container--text">
                JOIN THE CONVERSATION
              </h5>
              <textarea
                className="comment__text-container comment__text-container--one"
                name="name"
                rows="10"
                cols="50"
                placeholder="Add a new comment"
                value={newComment}
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <div className="comment__button-container">
              <button className="comment__button">COMMENT</button>
            </div>
          </form>
        </div>
        <div className="comment__default-comment"> {Comments}</div>
      </main>
    </div>
  );
};

export default Comments;

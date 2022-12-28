
import React, { useState } from 'react';

const LikeBtn = () => {
    const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
    return (
        <div className="main-container">
      {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
      <form onSubmit={onClickHandler}>
      <button className="comment-button">
          Submit
        </button>
      </form>
      </div>
    </div>
    );
};

export default LikeBtn;
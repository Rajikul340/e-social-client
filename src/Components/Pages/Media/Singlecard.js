import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { AuthUser } from "../../AuthContext/AuthContext";
import CommentDetails from "../CommentDetails/CommentDetails";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Singlecard = ({ singledata, userdata }) => {
  console.log('userdata', userdata);
  const { user } = useContext(AuthUser);
  const [loading, setLoading] = useState(true);
  const { photoURL, message, postImg, displayName, time, _id } = singledata;
  const [comments, setComments] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [likeaction, setLikeaction] = useState(false);
  const [dislikeaction, setDislikeaction] = useState(false);

  const likefun = () => {
    if (likeaction) {
      setLikeaction(false);
      setLike(like - 1);
    } else {
      setLikeaction(true);
      setLike(like + 1);
      if (dislikeaction) {
        setDislikeaction(false);
        setLike(like + 1);
        setDislike(dislike - 1);
      }
    }
  };
  const dislikefun = () => {
    if (dislikeaction) {
      setDislikeaction(false);
      setDislike(dislike - 1);
    } else {
      setDislikeaction(true);
      setDislike(like + 1);
      if (likeaction) {
        setLikeaction(false);
        setDislike(dislike + 1);
        setLike(like - 1);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const time = new Date();
    setComments(comment);
    const commentData = {
      time,
      comment,
      UserName: user?.displayName,
      UserImg: user?.photoURL,
      UserEmail: user?.email,
      postId: _id,
    };
    setLoading(true);
    fetch(" https://e-social-server.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
    setLoading(false);
  };

  return (
    <div className="card  bg-base-100 shadow-xl mt-4">
      <div className="flex items-center gap-2 p-2">
        <img src={photoURL} className="w-8 h-8 rounded-full" alt="" />
        <p>{displayName}</p>
      </div>
      <figure>
        <img src={postImg} className="border w-12/12" alt="post" />
      </figure>
      <div className="card-body">
        <p>{message ? message.slice(0, 120) : " "}</p>
        <div className="card-actions justify-end">
          <Link to={`/postdetails/${_id}`}>
            <button className="btn btn-outline btn-primary">Details</button>
          </Link>
        </div>
      </div>

      <div className="">
        <hr className=" " />

        <div className=" flex  justify-around lg:mx-5">
          <div className="flex gap-2">
            <button onClick={likefun} className="flex">
              <AiOutlineLike
                className={[likeaction ? "active-like " : null, "btn-like"]}
                size="22px"
              />
              <p>{like}</p>
            </button>
            <button onClick={dislikefun} className="flex">
              <AiOutlineDislike
                className={[
                  dislikeaction ? "active-dislike " : null,
                  "btn-like",
                ]}
                size="22px"
              />

              <p>{dislike}</p>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="comment"
              id="comment"
              className="justify-end"
              placeholder="comment"
            />
          </form>
        </div>

        <hr className="mb-3" />
      </div>
      <CommentDetails
        key={singledata._id}
        comments={comments}
        singledata={singledata}
      />
    </div>
  );
};

export default Singlecard;

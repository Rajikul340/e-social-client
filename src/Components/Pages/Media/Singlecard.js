import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { MdChildCare } from "react-icons/md";

const Singlecard = ({ singledata }) => {
  console.log(singledata);
  const { image, message, postImg, name, time, _id } = singledata;
  return (
    <div className="card  bg-base-100 shadow-xl mt-4">
      <div className="flex items-center">
        <img src={image} className="w-16 rounded-badge" alt="" />
        <p>{name}</p>
      </div>
      <figure>
        <img src={postImg} className="border w-12/12" alt="post" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <p>{message ? `${message.slice(0, 100)}... ` : ""}</p>
        <div className="card-actions justify-end">
          <Link to={`/postdetails/${_id}`}>
            {" "}
            <button>Details</button>
          </Link>
        </div>
      </div>

      <div className="">
        <hr className=" " />

        <div className="   justify-between lg:mx-5">
          <div className="">
            <div className="react ">
              <div className="react-me">
                <button className="flex items-center p-2">
                  <AiOutlineLike size="20px" className="mr-2" />
                  like
                </button>
                <div className="inner">
                  <div className="react-box ">
                    <ul>
                      <li className="like" data-hover="Like"></li>
                      <li className="love" data-hover="Love"></li>
                      <li className="haha" data-hover="Haha"></li>
                      <li className="wow" data-hover="Wow"></li>
                      <li className="sad" data-hover="Sad"></li>
                      <li className="angry" data-hover="Angry"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <input id="comment" className="justify-end" placeholder="comment" />
          {/* <FaComment id="comment-icon"/> */}
        </div>

        <hr className="mb-3" />
      </div>
    </div>
  );
};

export default Singlecard;

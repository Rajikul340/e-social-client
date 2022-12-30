import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { MdChildCare } from "react-icons/md";
import { AuthUser } from "../../AuthContext/AuthContext";
import CommentDetails from "../CommentDetails/CommentDetails";

const Singlecard = ({ singledata }) => {
  const {user} = useContext(AuthUser)
 const[loading, setLoading] = useState(true)
  const { image, message, postImg, name, time, _id } = singledata;
  const[comments, setComments] = useState('');
  console.log(comments);

      const handleSubmit = (event) =>{
         event.preventDefault();
         const form = event.target;
         const comment = form.comment.value ;
         const time = new Date()
         setComments(comment)
          const commentData ={
             time,
             comment,
             UserName:user?.displayName,
             UserImg:user?.photoURL,
             UserEmail:user?.email,
             postId:_id
          }
              setLoading(true)
         fetch('http://localhost:5000/comment',{
          method:"POST",
          headers:{
            "content-type": 'application/json'
          },
          body:JSON.stringify(commentData)
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
          form.reset();
         })
         setLoading(false)
      }





  return (

    
    <div className="card  bg-base-100 shadow-xl mt-4">
      <div className="flex items-center gap-2 p-2">
        <img src={image} className="w-8 h-8 rounded-full" alt="" />
        <p>{name}</p>

      </div>
      <figure>
        <img src={postImg} className="border w-12/12" alt="post" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <p>{message ? message.slice(0,120): " "}</p>
        <div className="card-actions justify-end">
        <Link to={`/postdetails/${_id}`}>
            {" "}
            <button className="btn btn-outline btn-primary">Details</button>
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

         <form onSubmit={handleSubmit}>
         <input type="text" name='comment' id="comment" className="justify-end" placeholder="comment" />
         </form>
        </div>

        <hr className="mb-3" />
      </div>
      <CommentDetails
       key={singledata._id}
       comments={comments}
       singledata={singledata}/>
    </div>

  );
};

export default Singlecard;

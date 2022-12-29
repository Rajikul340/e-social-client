import React from "react";


const Message = ({ comments, commentData }) => {

  console.log(commentData);
  const { UserImg, UserName, comment } = commentData;
  return (
    <div className="p-4 my-2 bg-[#F0F2F5] rounded-xl">
      <div className="flex items-center">
        <img src={UserImg} alt="" className="w-8 rounded-badge" />
        <h1>{UserName} </h1>
      </div>
      <p className="mt-1">{comments}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Message;

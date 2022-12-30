import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Message from '../Message/Message';

const CommentDetails = ({singledata,comments}) => {
const [comment, setComment] = useState([]);
const[loading, setLoading] = useState(true)
const { image, message, postImg, name, time, _id } = singledata;

useEffect(()=>{
    setLoading(true)
    fetch(' https://e-social-server.vercel.app/comment')
    .then(res=>res.json())
    .then(data=>{
        const ReviewData = data.filter((RevId) => RevId.postId === _id);
        setComment(ReviewData);
        setLoading(false)
    })
},[_id])



    return (
        <div>
             {
                loading ? <p>loading....</p> : <>
                 {
                    comment.map(commentData=><Message
                        key={commentData._id}
                        commentData={commentData}
                        comments={comments}
                    />)
                 }
                </>
             }
        </div>
    );
};

export default CommentDetails;
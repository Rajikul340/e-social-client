import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    const {postImg, message} = details;
    console.log(details);
    return (
        <div>
            <h1 className='text-3xl font-bold'>post details </h1>
            <div>
                    <img src={postImg} alt=''/>

                    <p>{message}</p>

            </div>
        </div>
    );
};

export default PostDetails;
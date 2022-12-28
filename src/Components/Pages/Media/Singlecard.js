import React from 'react';
import { Link } from 'react-router-dom';

const Singlecard = ({singledata}) => {
    console.log(singledata);
    const{image, message, postImg, name} = singledata;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className='flex items-center'>
                <img src={image} className='w-16 rounded-badge' alt=''/>
                 <p>{name}</p>
            </div>
        <figure><img src={postImg} className='border w-12/12' alt="post" /></figure>
        <div className="card-body">
          <h2 className="card-title">
  
          </h2>
          <p>{
                 message? `${message.slice(0, 100)}... `: ''
            }</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    );
};

export default Singlecard;
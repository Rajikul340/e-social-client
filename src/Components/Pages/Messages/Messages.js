import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Messages = () => {
    const loaddata= useLoaderData();
    console.log(loaddata);
    return (
        <div>
            <h1>message</h1>
        </div>
    );
};

export default Messages;
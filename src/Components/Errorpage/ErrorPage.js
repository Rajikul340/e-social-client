import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center  mt-80'>
            <h1 className='lg:text-8xl font-bold'>404</h1>
             <p>page Not Found </p>
              <Link to='/' className='text-[#2733FA]'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
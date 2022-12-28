import React, { useContext, useEffect, useState } from 'react';
import { AuthUser } from '../../AuthContext/AuthContext';
import Singlecard from './Singlecard';

const Media = () => {
    const{user} = useContext(AuthUser)
 const[mediaData, setMediaData] = useState([])

 useEffect(()=>{
fetch('http://localhost:5000/mediadata')
.then(res=>res.json())
.then(data=>{
    
    
    const matchingData = data.filter(
        (singleData) => singleData?.email === user?.email
        );
        setMediaData(matchingData)
        console.log(matchingData);
})
 },[user?.email])


    return (
        <div className=' mx-auto lg:w-1/2 bg-white'>

            {
             mediaData.map(singledata=><Singlecard
              key={singledata?._id}
              singledata={singledata}
             ></Singlecard>)   
            }
        </div>
    );
};

export default Media;
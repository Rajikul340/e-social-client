import React, { useContext, useEffect, useState } from 'react';
import { AuthUser } from '../../AuthContext/AuthContext';
import Singlecard from './Singlecard';

const Media = () => {
    const{user} = useContext(AuthUser)
 const[mediaData, setMediaData] = useState([]);
const[userdata, setUserdata] = useState([])

 useEffect(()=>{
fetch(' https://e-social-server.vercel.app/mediadata')
.then(res=>res.json())
.then(data=>{

    const matchingData = data.filter(
        (singleData) => singleData?.email === user?.email
        );
        setMediaData(matchingData)
        console.log(matchingData);
})
 },[user?.email])


 useEffect(()=>{
    fetch(' https://e-social-server.vercel.app/users')
    .then(res=>res.json())
    .then(data=>{
      setUserdata(data)
      const singleuser= data.map(singledata=>setUserdata(singledata))
    })
    
 
    },[])

 
 

    return (
        <div className=' mx-auto lg:w-1/2 '>

            {
             mediaData.map(singledata=><Singlecard
              key={singledata?._id}
              singledata={singledata}
              userdata={userdata}
             ></Singlecard>)   
            }
      
        </div>
    );
};

export default Media;
import React, { useContext, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUser } from "../../AuthContext/AuthContext";
import Header from "../Header/Header";
import Spinner from "../spinner/Spinner";

const About = () => {
  const loadData= useLoaderData();
  const { user } = useContext(AuthUser);
  const [photos, setphoto] = useState(null);
  const [newuser,setNewuser] =useState(loadData);
 const[loader, setLoader] = useState(false);

  const handleInputChange = (event) => {
    setphoto(URL.createObjectURL(event.target.files[0]));
  };



  const handleSubmitForm = (event) => {
    event.preventDefault();
    setLoader(true)
    console.log(event.target.value);
     const form = event.target;
     const img = form.photoURL.files[0]
    console.log(img);

    const formData = new FormData();
    formData.append("images", img);
    fetch("https://api.imgbb.com/1/upload?key=19900dd0d8e1013079c1d14e32346566", {
        method: "POST",
        body: formData,
      })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  
      fetch(` https://e-social-server.vercel.app/users/${loadData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body:JSON.stringify(newuser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoader(false)
          toast.success("profile updated !", {
            position: toast.POSITION.TOP_CENTER
          });
          form.reset();
        });

  };

  const handleInputChanges = (event) =>{
    const field = event.target.name;
    const value = event.target.value;
    const newUser = {...newuser}
    newUser[field] = value;
    console.log(value);
    setNewuser(newUser);
}

  return (
    <div className="">


 
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center font-semibold">
        Edit Your Profile
      </h1>

      <form className="flex
      
      "
      onSubmit={handleSubmitForm}
      >

        <div
   
        className="p-2 border min-h-screen ">

          {photos ? (
            <>
              <img
                src={photos}
                className="rounded-full lg:w-40 lg:h-40 md:w-40 md:h-40 w-20 h-20 relative"
                alt=""
              />
            </>
          ) : (
            <>
              <img
                src={user?.photoURL}
                className="rounded-full lg:w-40 lg:h-40 md:w-40 md:h-40 w-20 h-20 relative"
                alt=""
              />
            </>
          )}
          <label for="input" id="">
            {" "}
            <AiFillEdit
              title="upload image"
              className="absolute 
                lg:top-32 md:top-32 edit md:left-44 lg:left-44 top-24 left-20 "
              size="30px"
            />{" "}
          </label>
          <input
            type="file"
            name="photoURL"
            className="w-full border p-2 form-control hidden "
            onChange={handleInputChange}
            id="input"
          />
          <h3 className="lg:text-xl md:text-lg font-bold">
            {loadData?.displayName}
          </h3>
          <p className="lg:text-lg md:text-lg font-semibold">{loadData?.email}</p>
        </div>

        <div className="flex-1  ">
          <div
           
            className="border form-control  flex flex-col  p-4"
          >
            <label>Full Name</label>
            <input
              type="text"
              name="displayName"
              onChange={handleInputChanges}
              defaultValue={loadData?.displayName}
              className="input input-bordered w-full  max-w-xs"
            />
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              onChange={handleInputChanges}
              defaultValue={loadData?.email}
              className="input input-bordered w-full max-w-xs"
            />

            <button type="submit" className="btn btn-primary mt-4">
             { loader &&
              loader ? <Spinner/> : 'save'
             }
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;

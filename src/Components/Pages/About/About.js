import React, { useContext, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthUser } from "../../AuthContext/AuthContext";
import Header from "../Header/Header";

const About = () => {
  const { user } = useContext(AuthUser);
  const [photo, setphoto] = useState(null);
  const [userdata, setUserdata] = useState([]);
  console.log(userdata);
  const handleInputChange = (event) => {
    setphoto(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const filterdata = data.filter(
          (newdata) => newdata.email === user.email
        );
        setUserdata(filterdata);
      });
  }, [user.email]);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    userdata.map((singledata) => {
      fetch(`http://localhost:5000/users/${singledata._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  };

  return (
    <div className="">
      <h1 className="lg:text-5xl md:text-4xl text-2xl text-center font-semibold">
        Edit Your Profile{" "}
      </h1>

      <div className="flex ">
        <div className="p-2 border min-h-screen ">
          {photo ? (
            <>
              <img
                src={photo}
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
            name="photo"
            className="w-full border p-2 form-control hidden "
            onChange={handleInputChange}
            id="input"
          />
          <h3 className="lg:text-xl md:text-lg font-bold">
            {user?.displayName}
          </h3>
          <p className="lg:text-lg md:text-lg font-semibold">{user?.email}</p>
        </div>

        <div className="flex-1  ">
          <form
            onSubmit={handleSubmitForm}
            className="border  flex flex-col  p-4"
          >
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Full Name"
              className="input input-bordered w-full  max-w-xs"
            />
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />

            <button type="submit" className="btn btn-primary mt-4">
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;

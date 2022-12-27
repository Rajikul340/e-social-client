import React, { useContext, useState } from "react";
import img from "../../images/e-social.png";
import image from "../../images/e-social-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthUser } from "../../AuthContext/AuthContext";
import { Form, Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, ProfileUdpadted, user, googleLogInUser } = useContext(AuthUser);
  const navigate = useNavigate()

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0];
    console.log(name, email, password, photo);
    createUser(email, password)
      .then((result) => {
        const user = result?.user;
        console.log(user);
        handleProfileUdate(name, photo);
        form.reset();
        toast.success('Register successfully')
        navigate('/')

      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleProfileUdate = (name, photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    fetch(
      "https://api.imgbb.com/1/upload?key=19900dd0d8e1013079c1d14e32346566",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const profile = {
          displayName: name,
          photoURL: data?.data?.url,
        };
        ProfileUdpadted(profile)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            setError(err.message);
          });
      });
  };

const handleGoogleBtn = () =>{
  googleLogInUser()
  .then(result =>{   
     const user = result.user;
     console.log(user);
    }
 

  )
}

  return (
    <div className="">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">Register</h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row  bg-[#]">
          <div className="">
            <img src={image} alt="" className=" bg-[#2733FA] " />
          </div>
          <div>
            <form
              onSubmit={handleSubmitForm}
              className="border  flex flex-col p-4"
            >
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label>image</label>
              <input
                type="file"
                name="photo"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              <label>Password</label>
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="text-red-500">{error}</p>

              <button type="submit" className="btn btn-primary mt-4">
                Register
              </button>
               <p>already have an account please <Link className="text-[#2733FA]"  to='/login'>Login</Link></p>
          
            </form>
            <button onClick={handleGoogleBtn} className=" border w-full mt-4 p-3 rounded-btn">
                Google Sign In
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

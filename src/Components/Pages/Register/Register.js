import React from "react";
import img from "../../images/e-social.png";
import image from "../../images/e-social-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {

  

  return (
    <div className="bg-]">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">Register</h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row  bg-[#]">
          <div className="">
            <img src={image} alt="" className=" bg-[#2733FA] " />
          </div>
          <div>
            <form className="border  flex flex-col p-4">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label>image</label>
              <input
                type="file"
                name="file"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />

              <button className="btn btn-primary mt-4">Register</button>
              <button className=" border mt-4 p-3 rounded-btn">
                Google Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useContext, useState } from "react";
import img from "../../images/e-social.png";
import image from "../../images/e-social-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthUser } from "../../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, googleLogInUser, user } = useContext(AuthUser);
  const navigate = useNavigate()

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login successfull')
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleGoogleBtn = () => {
    googleLogInUser().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">Log In</h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row  bg-[#]">
          <div className="">
            <img src={image} alt="" className=" bg-[#2733FA] " />
          </div>
          <div className="w-1/2">
            <form
              onSubmit={handleSubmitForm}
              className="border  flex flex-col p-4"
            >
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
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
                login
              </button>
              <p>
                create a new account{" "}
                <Link className="text-[#2733FA]" to="/register">
                  register
                </Link>
              </p>
            </form>
            <button
              onClick={handleGoogleBtn}
              className=" border w-full mt-4 p-3 rounded-btn"
            >
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

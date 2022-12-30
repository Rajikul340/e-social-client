import { faAdjust, faMemory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Post from "./Post";
import { useState } from "react";
import LikeButton from "../LikeBtn/LikeBtn";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";



const Home = () => {
  return (
    <div className="border lg:w-1/2 lg:mx-auto bg-white min-h-screen">
      <Post />
      {/* <LikeButton/> */}

      
    </div>
  );
};

export default Home;
//https://lyket.dev/docs/react
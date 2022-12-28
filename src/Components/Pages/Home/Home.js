import { faAdjust, faMemory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Post from "./Post";

import { useState } from "react";

const Home = () => {


  return (
    <div className="border lg:w-1/2 lg:mx-auto bg-white min-h-screen">
      <Post />
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItem = (
    <>
      
      <li className="lg:mx-20"><Link to="/">Media</Link></li>
      <li className="lg:mx-20">  <Link to="/">Message</Link></li>
      <li className="lg:mx-20">  <Link to="/">About</Link></li>
    
    
    </>
  );

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start ">
          <Link to="/" className=" normal-case text-xl">
            E-SOCIAL
          </Link>
        </div>
        <ul className="navbar-center  lg:flex   lg:block"
        >
            {menuItem}
        </ul>

 
          <div className="navbar-end     lg:hidden">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 
                shadow bg-base-100 rounded-box w-48"
              >
                {menuItem}
              </ul>
            </div>
          </div>
     
      </div>
    </div>
  );
};

export default Header;
